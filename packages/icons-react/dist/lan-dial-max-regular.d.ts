import React from 'react';

export interface LanDialMaxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMaxRegular: React.FC<LanDialMaxRegularProps>;
export default LanDialMaxRegular;
