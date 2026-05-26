import React from 'react';

export interface LanSkiBootSkiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkiBootSkiRegular: React.FC<LanSkiBootSkiRegularProps>;
export default LanSkiBootSkiRegular;
