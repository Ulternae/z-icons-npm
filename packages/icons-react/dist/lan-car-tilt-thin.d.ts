import React from 'react';

export interface LanCarTiltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarTiltThin: React.FC<LanCarTiltThinProps>;
export default LanCarTiltThin;
