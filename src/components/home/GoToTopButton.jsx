import React, { useState, useEffect } from 'react';

const GoToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top when button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <button onClick={scrollToTop} style={styles.button}>
                    Top
                </button>
            )}
        </div>
    );
};

const styles = {
    button: {
        position: 'fixed',
        bottom: '20px',
        left: '30px', // Change this to left side
        zIndex: '1000',
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        padding: '15px',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '18px',
    }
};

export default GoToTopButton;
