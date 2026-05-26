import React from 'react';

export interface LanCandyCornProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandyCorn: React.FC<LanCandyCornProps>;
export default LanCandyCorn;
