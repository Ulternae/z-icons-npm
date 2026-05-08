import React from 'react';

export interface CoreMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMoon: React.FC<CoreMoonProps>;
export default CoreMoon;
