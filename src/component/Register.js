import React from 'react'

function Register() {
    return (
        <>

            <div class="container-fluid banner1">
                <div class="container">
                    <div class="login">
                        <h1>Regiteration</h1>
                        <br /><br /><br />
                        <center>
                            <form onsubmit="return validation()">
                                <div class="mb-3">
                                    <label>Name</label>
                                    <input class="form-control" type="text" name="" id="user" required />
                                    <span id='username'></span>
                                </div>
                                <div class="mb-3">
                                    <label>Mobile Number</label>
                                    <input class="form-control" type="text" name="" id="mob" required />
                                    <span id='mobilenum'></span>
                                </div>
                                <div class="mb-3">
                                    <label>Email</label>
                                    <input class="form-control" type="text" name="" id="mob" required />
                                    <span id='mail'></span>
                                </div>
                                <button class="btn btn-info">Submit</button>
                            </form>
                        </center>

                    </div>
                </div>
            </div>
    </>
  )
}

export default Register