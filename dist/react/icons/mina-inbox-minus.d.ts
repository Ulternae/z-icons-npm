import React from 'react';

export interface MinaInboxMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInboxMinus: React.FC<MinaInboxMinusProps>;
export default MinaInboxMinus;
