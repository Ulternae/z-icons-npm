import React from 'react';

export interface LanHockeyStickRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeyStickRegular: React.FC<LanHockeyStickRegularProps>;
export default LanHockeyStickRegular;
