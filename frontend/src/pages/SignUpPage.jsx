import { useState, useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { LoaderIcon } from "lucide-react"
import { Link } from "react-router";

function SignUpPage() {


    const [formData, setFormData, title , setTitle ] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    useEffect( ()=> {
        document.title = "Signup"
    }), [title];

    const { signup, isSigninUp } = useAuthStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(formData);
    }


    return (
        <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="signup-section bg-light col-md-4 rounded-4 shadow" style={{ border: "1px solid #7184f9ab" }}>
                <div className="mb-4 text-center">
                    <h3 className="d-block fw-bold" style={{ color: "#3D51D2" }}>Welcome to Signup!</h3>
                    <span className="d-block text-black-50" style={{ fontSize: '14px' }}>UnityChat</span>
                    <span style={{ fontSize: '14px' }}>Create A New Account</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex flex-column gap-1 mb-3">
                        <label htmlFor="">Full Name :</label>
                        <div className="form-input">
                            <i class="bi bi-person"></i>
                            <input type="text" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} placeholder="Enter your name..." required />
                        </div>

                    </div>
                    <div className="d-flex flex-column gap-1 mb-3">
                        <label htmlFor="">Email :</label>
                        <div className="form-input">
                            <i class="bi bi-envelope"></i>
                            <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Enter email..." required />
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-1 mb-3">
                        <label htmlFor="">Password :</label>
                        <div className="form-input">
                            <i class="bi bi-lock"></i>
                            <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Enter password..." required />
                        </div>
                    </div>
                    <button className="auth-btn" type="submit" disabled={isSigninUp}>
                        {
                            isSigninUp ? (
                                <LoaderIcon className="loader-spin spin-in-auth-btn" />
                            ) : (
                                "Create Account"
                            )
                        }
                    </button>
                </form>
                <div className="mt-3 text-center">
                    <Link to="/login" className="auth-link">
                        Already have an account? <span className="text-primary" style={{ textDecoration: "underline " }}>Login</span>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default SignUpPage;