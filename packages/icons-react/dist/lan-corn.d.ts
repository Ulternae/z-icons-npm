import React from 'react';

export interface LanCornProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCorn: React.FC<LanCornProps>;
export default LanCorn;
