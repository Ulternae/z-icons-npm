import React from 'react';

export interface LanCherriesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCherriesRegular: React.FC<LanCherriesRegularProps>;
export default LanCherriesRegular;
