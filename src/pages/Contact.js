// pages/contact.js atau components/Contact.js

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from 'next/link'; // Hanya diperlukan jika ada tautan internal

const Contact = () => {
    return (
        <>
            {/* Komponen Header */}
            <Header />

            {/* Bagian Utama */}
            <div className="full-section">
                {/* Banner Halaman Internal */}
                <div
                    className="dlab-bnr-inr overlay-primary-dark contact-page"
                    style={{ backgroundImage: "url('/assets/images/background/bg2.jpg')" }}
                >
                    <div className="container">
                        <div className="row">
                            {/* Kolom Kiri (Kosong atau isi jika diperlukan) */}
                            <div className="col-lg-4 col-4">
                                <div className="row text-white">
                                    {/* Konten tambahan dapat ditambahkan di sini */}
                                </div>
                            </div>

                            {/* Kolom Kanan (Formulir Kontak) */}
                            <div className="col-lg-8 col-8">
                                <form
                                    className="inquiry-form dzForm"
                                    action="https://formspree.io/f/maygobnk"
                                    method="POST"
                                >
                                    <div className="dzFormMsg"></div>
                                    <h3 className="box-title m-t0 m-b10">
                                        Kontak<span className="bg-primary"></span>
                                    </h3>
                                    <div className="row">
                                        {/* Nama Depan */}
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="ti-user text-primary"></i>
                                                    </span>
                                                    <input
                                                        name="Name"
                                                        type="text"
                                                        required
                                                        className="form-control"
                                                        placeholder="Nama Depan"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Telepon */}
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="ti-mobile text-primary"></i>
                                                    </span>
                                                    <input
                                                        name="Phone"
                                                        type="text"
                                                        required
                                                        className="form-control"
                                                        placeholder="Telephone"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="ti-email text-primary"></i>
                                                    </span>
                                                    <input
                                                        name="Email"
                                                        type="email"
                                                        className="form-control"
                                                        required
                                                        placeholder="Email"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Pesan */}
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="ti-agenda text-primary"></i>
                                                    </span>
                                                    <textarea
                                                        name="Message"
                                                        rows="4"
                                                        className="form-control"
                                                        required
                                                        placeholder="Pesan"
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tombol Submit */}
                                        <div className="col-lg-12">
                                            <button
                                                name="submit"
                                                type="submit"
                                                value="Submit"
                                                className="site-button button-lg"
                                            >
                                                <span>Kirim</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Akhir Banner Halaman Internal */}
            </div>

            {/* Komponen Footer */}
            <Footer />
        </>
    );
}

export default Contact;
