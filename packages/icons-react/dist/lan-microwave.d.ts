import React from 'react';

export interface LanMicrowaveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrowave: React.FC<LanMicrowaveProps>;
export default LanMicrowave;
