import React from 'react';

export interface LanOverlineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOverlineRegular: React.FC<LanOverlineRegularProps>;
export default LanOverlineRegular;
