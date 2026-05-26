import React from 'react';

export interface LanCircleParkingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleParking: React.FC<LanCircleParkingProps>;
export default LanCircleParking;
