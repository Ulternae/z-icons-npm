import React from 'react';

export interface MinaHomeMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHomeMinus: React.FC<MinaHomeMinusProps>;
export default MinaHomeMinus;
