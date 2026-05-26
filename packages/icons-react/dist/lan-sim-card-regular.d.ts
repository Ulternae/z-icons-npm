import React from 'react';

export interface LanSimCardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSimCardRegular: React.FC<LanSimCardRegularProps>;
export default LanSimCardRegular;
