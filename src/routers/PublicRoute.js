import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'


export const PubliceRoute = ({
    isAuthenticated,
    component: Component, //renaming (destructing)
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <Redirect to='/dashboard' />
            ) : (
                    <Component {...props} />
                )
        )} />
    )

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid //if state.auth.uid exists TRUE and if it dont exist FALSE
})

export default connect(mapStateToProps)(PubliceRoute)