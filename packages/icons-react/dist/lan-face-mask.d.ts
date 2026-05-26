import React from 'react';

export interface LanFaceMaskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMask: React.FC<LanFaceMaskProps>;
export default LanFaceMask;
