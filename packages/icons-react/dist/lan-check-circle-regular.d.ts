import React from 'react';

export interface LanCheckCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckCircleRegular: React.FC<LanCheckCircleRegularProps>;
export default LanCheckCircleRegular;
