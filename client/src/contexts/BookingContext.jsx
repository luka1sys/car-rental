import { createContext, useContext, useState } from "react";
import { createBooking as apiCreateBooking, deleteBooking, getAllBookings, getMyBookings } from "../services/bookngService";
import { createCheckout } from "../services/paymentService";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";

const BookingContext = createContext();
export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
    const [booking, setBooking] = useState(null);
    const [myBookings, setMyBookings] = useState([]);
    const [allBookings, setAllBookings] = useState([]);
    const [error, setError] = useState('');
    const {user} = useAuth();
    useEffect(() => {
        if (user) {
            fetchMyBookings();
            if (user.role === 'admin') {
                fetchAllBookings();
            }
        } else {
            // თუ იუზერი გამოვიდა (user === null), გაასუფთავე სთეითი
            setMyBookings([]);
            setAllBookings([]);
        }
    }, [user])

    const createBooking = async (data) => {
        try {
            const response = await apiCreateBooking(data);
            setBooking(response.data.booking);
            alert("Booking successful!");
            return response.data.booking;
        } catch (err) {
            alert(err?.response?.data?.message || "Booking failed");
            setError(err?.response?.data?.message || "Booking failed");
            throw err;
        }
    };

    const fetchMyBookings = async () => {
        try {
            const response = await getMyBookings();
            setMyBookings(response.data.bookings);
        } catch (err) {
            alert(err?.response?.data?.message || "Failed to load bookings");
        }
    };

    const proccedToCheckout = async (bookingId) => {
        try {
            const response = await createCheckout({ bookingId });
            const { url } = response.data;
            window.location.href = url;
        } catch (err) {
            alert(err?.response?.data?.message || "Checkout failed");
            throw err;
        }
    };

    const fetchAllBookings = async () => {
        try {
            const response = await getAllBookings();
            setAllBookings(response.data.bookings);
        } catch (err) {
            console.log(err)
        }
    }

    const deletedBooking = async (id) => {
        try {
            await deleteBooking(id); // call API
            // remove from allBookings
            setAllBookings(prev => prev.filter(booking => booking._id !== id));
            // remove from myBookings
            setMyBookings(prev => prev.filter(booking => booking._id !== id));
        } catch (err) {
            alert(err?.response?.data?.message || "Failed to delete booking");
        }
    };


    return (
        <BookingContext.Provider value={{ booking, myBookings, allBookings, error, createBooking, proccedToCheckout, fetchMyBookings, fetchAllBookings, deletedBooking }}>
            {children}
        </BookingContext.Provider>
    );
};
