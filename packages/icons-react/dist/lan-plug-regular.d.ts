import React from 'react';

export interface LanPlugRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlugRegular: React.FC<LanPlugRegularProps>;
export default LanPlugRegular;
