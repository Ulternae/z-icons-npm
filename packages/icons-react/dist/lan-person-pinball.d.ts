import React from 'react';

export interface LanPersonPinballProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonPinball: React.FC<LanPersonPinballProps>;
export default LanPersonPinball;
