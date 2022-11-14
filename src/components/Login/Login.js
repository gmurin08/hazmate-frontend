import React from 'react';
import './Login.css';

export default function Login(){
    return(
        <div className="container">
            <form action="action_page.php" method="post">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>

                    <button type="submit">Login</button>
                    <input type="checkbox" checked="checked" name="remember"/> Remember me
            </form>
        </div>
    )
}