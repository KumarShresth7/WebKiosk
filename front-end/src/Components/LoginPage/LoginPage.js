import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <>

    <div className="object-center">
      <div className="a object-centervoi">Thapar University,Patiala</div>
      <div className="b">
        (Formerly known as Thapar Institute of Engineering and Technology)
      </div>
      <div className="c">WEB KIOSK(INTERNET) for Parents/Students</div>
      </div>
      <div className="authentication">
        <div className="auth">
          <img src="https://images.shiksha.com/mediadata/images/1584960645php8nt1Zj.jpeg"></img>
        </div>

        <div className="kiosk">
          Kiosk Authentication Screen
          <br />
          <br />
          <form>
            <label for="cars">Member Type </label>

            <select name="cars" id="cars">
              <option value="Students">Students</option>
              <option value="Parents">Parents</option>
            </select>

            <br />

            <label for="fname">Enrollment No </label>
            <input type="text" id="fname" name="fname" />
            <br />

            <label for="fname">Password/Pin </label>
            <input type="text" id="fname" name="fname" />
            <br />

            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </form>
        </div>
      </div>
      <div className="Disclaimer">
        Disclaimer:Thapar Institute of ENgineering and Technology is not
        responsible for any inadvertent error that may have crept in the results
        being published on WEB KIOSK. The results published on net are for
        immediate information to the examinees. These cannot be treated as final
        result. Original Grade Cards have been issued by the Institute
        separately under the signature of Registrar and are authentic proof of
        academic performance.
      </div>
    </>
  );
}

export default LoginPage;
