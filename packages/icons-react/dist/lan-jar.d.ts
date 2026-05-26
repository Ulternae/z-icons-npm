import React from 'react';

export interface LanJarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJar: React.FC<LanJarProps>;
export default LanJar;
