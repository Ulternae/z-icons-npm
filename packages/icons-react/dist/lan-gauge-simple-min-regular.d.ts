import React from 'react';

export interface LanGaugeSimpleMinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleMinRegular: React.FC<LanGaugeSimpleMinRegularProps>;
export default LanGaugeSimpleMinRegular;
