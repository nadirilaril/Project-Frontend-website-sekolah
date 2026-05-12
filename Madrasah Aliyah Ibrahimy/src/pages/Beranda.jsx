import { useNavigate } from "react-router-dom"; // 1. Import hook useNavigate
import BasicExample from "../components/navBar";
// import Footer from "../components/Footer";
import "../App.css";

function Beranda() {
  const navigate = useNavigate(); // 2. Inisialisasi fungsi navigate

  return (
    <div className="page-wrapper">
      <BasicExample />

      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Melahirkan Generasi <br />
              <span>Berakhlak Mulia</span>
            </h1>
            <p className="hero-subtitle">Madrasah Aliyah Ibrahimy</p>
            <p className="hero-tagline">Secang - Kalipuro - Banyuwangi</p>

            <div className="hero-buttons">
              {/* 3. Tambahkan onClick untuk berpindah ke /tentang */}
              <button
                className="btn-primary-custom"
                onClick={() => navigate("/tentang")}
              >
                Tentang Sekolah
              </button>

              <button
                className="btn-outline-custom"
                onClick={() => navigate("/spmb")}
              >
                SPMB
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beranda;
