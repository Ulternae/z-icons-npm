import React from 'react';

export interface LanOarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOar: React.FC<LanOarProps>;
export default LanOar;
