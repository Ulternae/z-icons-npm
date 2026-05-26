import React from 'react';

export interface LanEarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEar: React.FC<LanEarProps>;
export default LanEar;
