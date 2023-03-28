import React from 'react';

export default function Footer() {
    return (<React.Fragment>
        <footer className="bg-gradient-to-l from-pink-200 to-yellow-300">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-700 sm:text-left">
                    <span className="block sm:inline">&copy; 2023, Lynne Sullivan</span>{' '}
                    <span className="block sm:inline">All rights reserved</span><br/>
                    <span className="block sm:inline">Created by: stevenrhett.com</span>

                </div>
            </div>
        </footer>

    </React.Fragment>);
};

