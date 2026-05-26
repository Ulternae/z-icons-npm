import React from 'react';

export interface LanHockeyStickPuckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeyStickPuckRegular: React.FC<LanHockeyStickPuckRegularProps>;
export default LanHockeyStickPuckRegular;
