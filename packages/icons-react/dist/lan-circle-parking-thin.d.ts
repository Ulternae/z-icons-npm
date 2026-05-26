import React from 'react';

export interface LanCircleParkingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleParkingThin: React.FC<LanCircleParkingThinProps>;
export default LanCircleParkingThin;
