import React, { Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
