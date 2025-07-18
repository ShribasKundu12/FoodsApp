import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="text-center">
            <h2 className="text-primary">FOOD APP SYSTEM</h2>
            <img 
                src="https://img.freepik.com/premium-photo/restaurant-food-restaurant-menu-photos-menu_830198-777.jpg?semt=ais_hybrid"
                height={300}
                width={300}
                alt="Delicious food on a restaurant menu"
                className="rounded"
            />
            <br /><br />
            <div className="d-flex justify-content-center gap-3">
                <button 
                    className="btn btn-outline-success" 
                    onClick={() => navigate("/register")}
                >
                    REGISTER
                </button>
                <button 
                    className="btn btn-outline-secondary" 
                    onClick={() => navigate("/login")}
                >
                    LOGIN
                </button>
            </div>
        </div>
    );
}

export default Home;
