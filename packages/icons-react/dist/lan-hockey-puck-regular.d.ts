import React from 'react';

export interface LanHockeyPuckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeyPuckRegular: React.FC<LanHockeyPuckRegularProps>;
export default LanHockeyPuckRegular;
