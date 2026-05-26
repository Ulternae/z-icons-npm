import React from 'react';

export interface LanGridRoundRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRoundRegular: React.FC<LanGridRoundRegularProps>;
export default LanGridRoundRegular;
