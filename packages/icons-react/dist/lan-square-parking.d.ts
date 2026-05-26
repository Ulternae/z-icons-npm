import React from 'react';

export interface LanSquareParkingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareParking: React.FC<LanSquareParkingProps>;
export default LanSquareParking;
