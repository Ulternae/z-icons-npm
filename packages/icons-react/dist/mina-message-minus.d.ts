import React from 'react';

export interface MinaMessageMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMessageMinus: React.FC<MinaMessageMinusProps>;
export default MinaMessageMinus;
