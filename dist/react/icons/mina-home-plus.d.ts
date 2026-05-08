import React from 'react';

export interface MinaHomePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHomePlus: React.FC<MinaHomePlusProps>;
export default MinaHomePlus;
