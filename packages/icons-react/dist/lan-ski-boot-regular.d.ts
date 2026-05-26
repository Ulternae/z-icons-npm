import React from 'react';

export interface LanSkiBootRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkiBootRegular: React.FC<LanSkiBootRegularProps>;
export default LanSkiBootRegular;
