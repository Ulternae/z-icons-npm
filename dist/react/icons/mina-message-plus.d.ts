import React from 'react';

export interface MinaMessagePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMessagePlus: React.FC<MinaMessagePlusProps>;
export default MinaMessagePlus;
