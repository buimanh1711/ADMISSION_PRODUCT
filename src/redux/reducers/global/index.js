const initialState = {
  login: false,
  auth: {},
  title: "",
  popup: {
    active: false,
    content: "",
  },
  menu: [
    {
      title: "Đăng kí tuyển sinh",
      path: "/",
      icon: <i className="fas fa-graduation-cap"></i>,
    },
    {
      title: "Quản lý giảng viên",
      path: "/staffs",
      icon: <i className="fas fa-user-cog"></i>,
      login: true
    },
    {
      title: "Quản lý chuyên ngành",
      path: "/products",
      icon: <i className="fas fa-user-md"></i>
    },
    {
      title: "Thông tin",
      path: "/about",
      icon: <i className="fas fa-info"></i>,
    },
  ],
  countries: [
    {
      id: 1,
      name: 'Chuyên Ngoại ngữ'
    },
    {
      id: 2,
      name: 'Chuyên Đại học Sư phạm Hà Nội'
    },
    {
      id: 3,
      name: 'Chuyên Khoa học Tự nhiên'
    },
    {
      id: 4,
      name: 'Chuyên Hà Nội - Amsterdam'
    },
    {
      id: 5,
      name: 'Chu Văn An'
    },
    {
      id: 6,
      name: 'Chuyên Nguyễn Huệ'
    },
    {
      id: 7,
      name: 'Kim Liên'
    },
    {
      id: 8,
      name: 'Dân lập Lương Thế Vinh'
    },
    {
      id: 9,
      name: 'Trần Phú'
    },
    {
      id: 10,
      name: 'Yên Hòa'
    },
    {
      id: 11,
      name: 'Việt Đức'
    },
    {
      id: 12,
      name: 'Thăng Long'
    },
    {
      id: 13,
      name: 'Nguyễn Gia Thiều'
    },
    {
      id: 14,
      name: 'Bán công Nguyễn Tất Thành'
    },
    {
      id: 15,
      name: 'Phan Đình Phùng'
    },
    {
      id: 16,
      name: 'Chuyên Nguyễn Huệ'
    },
    {
      id: 17,
      name: 'Ngô Sĩ Liên'
    },
    {
      id: 18,
      name: 'Thăng Long'
    },
    {
      id: 19,
      name: 'Trần Nhân Tông'
    },
    {
      id: 20,
      name: 'Phùng Hưng'
    },
    {
      id: 21,
      name: 'Mai Hắc Đế'
    },
    {
      id: 22,
      name: 'Hoàng Diệu'
    },
    {
      id: 23,
      name: 'Lý Thường Kiệt'
    },
    {
      id: 24,
      name: 'Mê Linh'
    },
    {
      id: 25,
      name: 'Lý Thường Kiệt'
    },
  ],
  user: {
    _id: "",
    fullName: "",
    role: null,
    userImage: null,
    email: "",
    address: "",
    phone: "",
  },
  loading: false,
  users: [],
  userPage: {},
  guests: [],
  totalGuests: 0,
  guestPage: {},
  guest: {},
  profile: {},
  products: [],
  productPage: {},
  categories: [],
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TITLE": {
      return {
        ...state,
        title: action.payload || "Lỗi Tiêu Đề",
      };
    }

    case "GET_ONE_GUEST": {
      return {
        ...state,
        guest: {
          ...action.payload,
        },
      };
    }

    case "GET_ALL_GUESTS": {
      return {
        ...state,
        guests: [...action.payload.guests],
        guestPage: action.payload.guestPage,
        totalGuests: action.payload.guestPage.totalGuests,
      };
    }

    case "CREATE_GUEST": {
      const { guests } = state;
      return {
        ...state,
        guests: [...guests, action.payload],
      };
    }

    case "UPDATE_GUEST": {
      const { guests } = state;
      const { _id } = action.payload;
      return {
        ...state,
        guests: [...guests.filter((x) => x._id !== _id), action.payload],
      };
    }

    case "REMOVE_GUEST": {
      const { guests } = state;

      return {
        ...state,
        guests: [...guests.filter((x) => x._id !== action.payload)],
      };
    }

    case "CREATE_USER": {
      const { users } = state;
      return {
        ...state,
        users: [...users, action.payload],
      };
    }

    case "UPDATE_USER": {
      const { users } = state;
      const { _id } = action.payload;
      return {
        ...state,
        users: [...users.filter((x) => x._id !== _id), action.payload],
      };
    }

    case "REMOVE_USER": {
      const { users } = state;

      return {
        ...state,
        users: [...users.filter((x) => x._id !== action.payload)],
      };
    }

    case "CREATE_PRODUCT": {
      const { products } = state;
      return {
        ...state,
        products: [...products, action.payload],
      };
    }

    case "GET_ALL_PRODUCTS": {
      return {
        ...state,
        products: [...action.payload.products],
        productPage: action.payload.productPage,
      };
    }

    case "REMOVE_PRODUCT": {
      const { products } = state;
      return {
        ...state,
        products: products.filter((x) => x._id !== action.payload),
      };
    }

    case "UPDATE_PRODUCT": {
      const { products } = state;
      const { _id } = action.payload;
      return {
        ...state,
        products: [...products.filter((x) => x._id !== _id), action.payload],
      };
    }

    case "GET_ALL_USERS": {
      return {
        ...state,
        users: [...action.payload.users],
        userPage: action.payload.userPage,
      };
    }

    case "GET_CATEGORIES": {
      return {
        ...state,
        categories: [...action.payload],
      };
    }

    case "TOGGLE_LOADING": {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case "GET_USER_DATA": {
      const {
        login,
        fullName,
        address,
        _id,
        image,
        role,
        token,
        email,
        username,
        phone,
      } = action.payload;
      localStorage.setItem("accessToken", token);
      return {
        ...state,
        login: login,
        user: {
          _id,
          username,
          fullName,
          role,
          userImage: image,
          phone,
          email,
          address,
        },
      };
    }

    case "AUTHENTICATION": {
      const { login, user } = action.payload;
      const {
        fullName,
        address,
        _id,
        image,
        role,
        email,
        username,
        phone,
      } = user;
      return {
        ...state,
        login: login,
        user: {
          _id,
          username,
          fullName,
          role,
          userImage: image,
          phone,
          email,
          address,
        },
      };
    }

    case "CLEAR_DATA": {
      return {
        ...state,
        login: false,
        user: {
          _id: "",
          username: "",
          fullName: "",
          role: "",
          userImage: null,
          phone: "",
          email: "",
          address: "",
        },
      };
    }
  }

  return state;
};

export default globalReducer;
