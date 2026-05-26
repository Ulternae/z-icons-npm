import React from 'react';

export interface LanIglooRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIglooRegular: React.FC<LanIglooRegularProps>;
export default LanIglooRegular;
