import React from 'react';

export interface LanCarTiltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarTilt: React.FC<LanCarTiltProps>;
export default LanCarTilt;
