import React from 'react';

export interface LanKhandaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKhandaRegular: React.FC<LanKhandaRegularProps>;
export default LanKhandaRegular;
