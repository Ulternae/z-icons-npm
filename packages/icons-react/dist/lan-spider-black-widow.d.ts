import React from 'react';

export interface LanSpiderBlackWidowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpiderBlackWidow: React.FC<LanSpiderBlackWidowProps>;
export default LanSpiderBlackWidow;
