import React from 'react';

export interface LanCarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarThin: React.FC<LanCarThinProps>;
export default LanCarThin;
