class AppUrl {
  static ApiBaseURL = process.env.NEXT_PUBLIC_API_SERVER_BASE_URL + "/api";

  //auth routes
  static userLogin = this.ApiBaseURL + "/login";
  static logout = this.ApiBaseURL + "/logout";

  //send money
  static sendMoney = this.ApiBaseURL + "/send-money";

  //dashboard
  static dashboard = this.ApiBaseURL + "/dashboard";
}

export default AppUrl;
