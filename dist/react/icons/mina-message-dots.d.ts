import React from 'react';

export interface MinaMessageDotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMessageDots: React.FC<MinaMessageDotsProps>;
export default MinaMessageDots;
