import React from 'react';

export interface LanSquareParkingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareParkingThin: React.FC<LanSquareParkingThinProps>;
export default LanSquareParkingThin;
