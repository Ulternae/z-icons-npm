import React from 'react';

export interface LanMoneyCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyCheckRegular: React.FC<LanMoneyCheckRegularProps>;
export default LanMoneyCheckRegular;
