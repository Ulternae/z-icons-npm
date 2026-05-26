import React from 'react';

export interface LanToothThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToothThin: React.FC<LanToothThinProps>;
export default LanToothThin;
