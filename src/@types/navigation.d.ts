export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Welcome: undefined;
      SignIn: undefined;
      Home: {
        name: string
      };
      CompanyProfile:{
        userName: string
        nameCompany: string,
        interest: string,
        city: string,
        state: string,
        badges: [string],
        description: string
        homeService: boolean
      }
    }
  }
}
