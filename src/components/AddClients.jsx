import {Link } from "react-router-dom";

function AddClients(){
    return<>
    <h1>Add Client</h1>
    <p>...</p>
    <Link to="/" className="btn btn-primary btn-lg custom-home-btn">
        Home
    </Link>
    <p>...</p>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Name</span>
            <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-name" />
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">Email</span>
            <input type="email" class="form-control" placeholder="email@gmail.com" aria-label="Email" aria-describedby="basic-email" />
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">From</span>
            <input type="text" class="form-control" placeholder="Country" aria-label="Country" aria-describedby="basic-country" />
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon4">Emailed-On</span>
            <input type="date" class="form-control" placeholder="Emailed On" aria-label="Emailed On" aria-describedby="basic-emailed-on" />
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon5">Follow-up on</span>
            <input type="date" class="form-control" placeholder="Followed-up on" aria-label="Followed-up on" aria-describedby="basic-followed-up-on" />
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon5">Note</span>
            <input type="text" class="form-control" placeholder="Note" aria-label="Note" aria-describedby="basic-note" />
        </div>

        <div class="input-group mb-3" style={{justifyContent:"end"}}>
            <Link to="/" className="btn btn-primary btn-lg custom-home-btn">
                Add Client
            </Link>
        </div>
    </>
}

export default AddClients