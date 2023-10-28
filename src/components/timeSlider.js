import React, { useState } from 'react';
import chargingIcon from '../static/chargingIcon.png'; // Importing the image


const TimeSlider = () => {
    const [selectedHour, setSelectedHour] = useState(2); // Default to 2 hrs
    const [isDragging, setIsDragging] = useState(false);



    const [hourlyCost] = useState('12');



    const handleSliderClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const sectionWidth = rect.width / 3;
    
        if (clickX < sectionWidth) {
            setSelectedHour(1);
        } else if (clickX < 2 * sectionWidth) {
            setSelectedHour(2);
        } else {
            setSelectedHour(3);
        }
    };

    const handleCircleMouseDown = (e) => {
        setIsDragging(true);
        document.addEventListener('mousemove', handleCircleDrag);
        document.addEventListener('mouseup', handleCircleDragEnd);
    };

    const handleCircleDrag = (e) => {
        const rect = e.target.getBoundingClientRect();
        let newHour;

        if (e.clientX < rect.left + rect.width / 3) {
            newHour = 1;
        } else if (e.clientX < rect.left + 2 * rect.width / 3) {
            newHour = 2;
        } else {
            newHour = 3;
        }

        setSelectedHour(newHour);
    };

    const handleCircleDragEnd = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleCircleDrag);
        document.removeEventListener('mouseup', handleCircleDragEnd);
    };

    return (
        <div style={styles.outerSlider}>
            <div style={styles.costInfo}>$ {hourlyCost} / hr</div>

            <div style={styles.infoRow}>
                <div style={styles.selectedHour}>
                    {selectedHour} hrs            
                </div>

            </div>
            
                <div style={styles.sliderBar} onClick={handleSliderClick}>
                    <div 
                        style={{
                            ...styles.shadedSliderBar, 
                            width: `calc(${selectedHour === 1 ? '0%' : selectedHour === 2 ? 'calc(50% + 18px)' : '100%'})` 
                        }}>
                    </div>
                    <div 
                        style={{ 
                            ...styles.circle, 
                            left: `calc(${selectedHour === 1 ? '0%' : selectedHour === 2 ? 'calc(50% - 18px)' : 'calc(100% - 36px)'})` 
                        }}
                        onMouseDown={handleCircleMouseDown}
                    >
                        <img src={chargingIcon} style={styles.circleImage} />

                    </div>
                </div>
            <div style={styles.ticks}>
                <span>|</span>
                <span>|</span>
                <span>|</span>
            </div>
            <div style={styles.markers}>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
        </div>
    );
};

const styles = {
    outerSlider: {
        alignItems: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    costInfo: {
        position: 'absolute',
        right: '0',
        marginRight: '40px'
    },
    selectedHour: {
        fontFamily: 'Roboto',

        fontSize: '24px',
        fontWeight: 'Bold'
    },
    infoRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '16px',

    },
    sliderBar: {
        width: '100%', // Using the relative width
        height: '32px', // Fixed height
        backgroundColor: '#E0E0E0',
        position: 'relative',
        borderRadius: '16px',
        cursor: 'pointer',
    },
    shadedSliderBar: {
        backgroundColor: '#70ee9b',
        width: '20px',
        borderRadius: '16px',
        opacity: '0.5',
        height: '32px'
    },
    circle: {
        width: '32px', // Fixed width
        height: '32px', // Fixed height
        backgroundColor: '#29a324',
        borderRadius: '50%',
        position: 'absolute',
        top: '-2px',
        overflow: 'hidden',
        border: '2px solid #FFFFFF',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.4)', // This adds the shadow
    },
    circleImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',  // This will ensure the image covers the circle without stretching
    },
    ticks: {
        display: 'flex',
        color: '#000000',
        opacity: '0.2',
        justifyContent: 'space-between',
        width: '90%', // Using the relative width
        fontSize: '10px',
        fontWeight: 'bold',
        marginTop: '0px'
    },
    markers: {
        display: 'flex',
        color: '#000000',
        opacity: '0.2',
        justifyContent: 'space-between',
        width: 'calc(90% + 6px)', // Using the relative width
        marginTop: '8px',
    },
};

export default TimeSlider;
