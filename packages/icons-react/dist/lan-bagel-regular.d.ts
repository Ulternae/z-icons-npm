import React from 'react';

export interface LanBagelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagelRegular: React.FC<LanBagelRegularProps>;
export default LanBagelRegular;
