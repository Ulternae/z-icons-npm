import React from 'react';

export interface LanKazooRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKazooRegular: React.FC<LanKazooRegularProps>;
export default LanKazooRegular;
