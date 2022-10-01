import Router from "next/router";
import React from "react";
import PreLoader from "../partials/PreLoader";
import AppStorage from "../../service/AppStorage";

const authenticatedRoute = (Component = null, role = null, options = {}, cb = null) => {
    class AuthRoute extends React.Component {
        state = {
            loading: true,
            user: {},
            data: {}
        };

        async componentDidMount() {
            const user = AppStorage.getUser();
            this.setState({user: user});
            if (user) {
                if (cb) {
                    this.setState({data: (await cb(this.props)).data})
                }
                this.setState({loading: false});
                return <Component {...this.props} user={this.state.user} data={this.state.data}/>;
            }
            Router.replace(`/`);
        }

        render() {
            const {loading} = this.state;
            if (loading) {
                return <PreLoader/>;
            }

            return <Component {...this.props} user={this.state.user} data={this.state.data}/>;
        }
    }

    return AuthRoute;
};

export default authenticatedRoute;
