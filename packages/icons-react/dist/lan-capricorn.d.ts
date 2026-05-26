import React from 'react';

export interface LanCapricornProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCapricorn: React.FC<LanCapricornProps>;
export default LanCapricorn;
