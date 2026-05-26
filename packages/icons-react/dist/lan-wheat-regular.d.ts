import React from 'react';

export interface LanWheatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWheatRegular: React.FC<LanWheatRegularProps>;
export default LanWheatRegular;
