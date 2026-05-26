import React from 'react';

export interface LanBroccoliRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBroccoliRegular: React.FC<LanBroccoliRegularProps>;
export default LanBroccoliRegular;
