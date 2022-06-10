import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NotFound } from "../components/NotFound";
import { Films } from "../containers/Films";
import { MovieDetail } from "../containers/MovieDetail";

export const MainRoute = () => (
    <BrowserRouter>
    <React.Fragment>
        <Header />
        <main className="container">
            <Routes>
                <Route path="/" element={<Films />} />
                <Route path="/film/:imdbID" element={<MovieDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
    </React.Fragment>
    </BrowserRouter>
);


