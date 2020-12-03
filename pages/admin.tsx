import Layout from '../components/Layout'
import SimpleHeader from '../components/headers/SimpleHeader'
import LoginForm from '../containers/loginForm/LoginForm'

export default function Admin() {
    return (
        <Layout>
            <SimpleHeader></SimpleHeader>
            <LoginForm />
        </Layout>
    )
}