import { Routes, Route} from 'react-router-dom';
import './globals.css';

function App() {
    return (
        <main className='flex h-screen'>
            <Routes>
                {/* public routes */}
                <Route>
                    <Route path='/sign-in' element={<SigninForm />} />
                    <Route path='/sign-up' element={<SignupForm />} />
                </Route>
                {/* private routes */}
                <Route>

                </Route>
            </Routes>
        </main>
    )
}

export default App