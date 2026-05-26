import React from 'react';

export interface LanPersonPinballThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonPinballThin: React.FC<LanPersonPinballThinProps>;
export default LanPersonPinballThin;
