const ClientMenu = ({ setCreateForm }) => {

  return (
    <div id="client-menu">
      <div className="client-menu-container">
        <ul>
          <li className="add">
            <button onClick={() => setCreateForm(true)}>
              <i className="fas fa-plus"></i>
              <span>Đăng ký xét tuyển</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ClientMenu;
