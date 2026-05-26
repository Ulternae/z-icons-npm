import React from 'react';

export interface LanFootballHelmetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFootballHelmetRegular: React.FC<LanFootballHelmetRegularProps>;
export default LanFootballHelmetRegular;
