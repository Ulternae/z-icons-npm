import React from 'react';

export interface MinaYenCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaYenCircle: React.FC<MinaYenCircleProps>;
export default MinaYenCircle;
