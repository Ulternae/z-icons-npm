import React from 'react';

export interface LanCactusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCactusRegular: React.FC<LanCactusRegularProps>;
export default LanCactusRegular;
