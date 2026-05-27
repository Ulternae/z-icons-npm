import React from 'react';

export interface CoreQuotesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreQuotesSolid: React.FC<CoreQuotesSolidProps>;
export default CoreQuotesSolid;
