import React from 'react';

export interface LanAcornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAcornRegular: React.FC<LanAcornRegularProps>;
export default LanAcornRegular;
