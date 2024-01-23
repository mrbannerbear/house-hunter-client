const Signup = () => {
  // full name, role (House Owner or House Renter) (it must be selected as an option), phone number, email, and password.

  const submitForm = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const role = e.target.role.value
    const phone = e.target.name.phone
    const email = e.target.email.value
    const password = e.target.password.value

    const values = {name, role, phone: "+880"+phone, email, password}

    console.log(values)
  }

  return (
    <div>
      <div className="hero min-h-screen bg-green-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
          </div>

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={submitForm}>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select
                  name="role"
                  placeholder="Role"
                  required
                  className="border p-2 rounded-md"
                >
                  <option value="House Owner">House Owner</option>
                  <option value="House Renter">House Renter</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="input input-bordered w-1/2 placeholder:text-black"
                    readOnly
                    placeholder="+880"
                    name="prephone"
                  />
                  <input
                    type="tel"
                    className="input input-bordered"
                    name="phone"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-green-800 text-white">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
