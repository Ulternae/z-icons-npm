import React from 'react';

export interface LanCaduceusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaduceusRegular: React.FC<LanCaduceusRegularProps>;
export default LanCaduceusRegular;
