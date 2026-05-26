import React from 'react';

export interface LanSignHangingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignHanging: React.FC<LanSignHangingProps>;
export default LanSignHanging;
