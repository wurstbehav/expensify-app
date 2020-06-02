import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'


export const PrivateRoute = ({
    isAuthenticated,
    component: Component, //renaming (destructing)
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <div>
                    <Header />
                    <Component {...props} />
                </div>
            ) : (
                    <Redirect to='/' />
                )
        )} />
    )

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid //if state.auth.uid exists TRUE and if it dont exist FALSE
})

export default connect(mapStateToProps)(PrivateRoute)