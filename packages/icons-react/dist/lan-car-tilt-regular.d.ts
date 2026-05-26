import React from 'react';

export interface LanCarTiltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarTiltRegular: React.FC<LanCarTiltRegularProps>;
export default LanCarTiltRegular;
