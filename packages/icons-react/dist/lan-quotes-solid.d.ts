import React from 'react';

export interface LanQuotesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQuotesSolid: React.FC<LanQuotesSolidProps>;
export default LanQuotesSolid;
