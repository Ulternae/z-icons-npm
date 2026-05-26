import React from 'react';

export interface LanSquareParkingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareParkingRegular: React.FC<LanSquareParkingRegularProps>;
export default LanSquareParkingRegular;
