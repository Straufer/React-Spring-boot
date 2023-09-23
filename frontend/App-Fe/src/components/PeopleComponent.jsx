import React from "react";
import ApiService from "../services/ApiService";

class PeopleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      id: "",
      user: null,
    };
  }

  componentDidMount() {
    this.fetchAllUsers();
  }

  fetchAllUsers = () => {
    ApiService.getUsers()
      .then((response) => {
        this.setState({ people: response.data });
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  searchId = (e) => {
    this.setState({ id: e.target.value });
  };

  getUserById = () => {
    const { id } = this.state;

    if (id) {
      ApiService.getUserById(id)
        .then((response) => {
          this.setState({ user: response.data });
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
          this.setState({ user: null });
        });
    }
  };

  render() {
    const { id, user, people } = this.state;
  
    return (
      <div>
        <h1 className="text-center">Orang</h1>
        <label htmlFor="idInput">Masukkan ID:</label>
        <form action="" onSubmit={(e) => { e.preventDefault(); }}>
          <input
            type="text"
            id="idInput"
            className="form-control"
            value={id}
            onChange={this.searchId}
          />
          <button className="btn btn-primary" onClick={this.getUserById}>
            Cari
          </button>
        </form>
  
        {user !== null ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <td>Id</td>
                <td>Nama</td>
              </tr>
            </thead>
            <tbody>
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nama}</td>
              </tr>
            </tbody>
          </table>
        ) : people.length > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <td>Id</td>
                <td>Nama</td>
              </tr>
            </thead>
            <tbody>
              {this.state.people.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nama}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>User not found</p>
        )}
      </div>
    );
  }
  
}

export default PeopleComponent;
