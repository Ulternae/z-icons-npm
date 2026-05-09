import React from 'react';

export interface MinaInfoCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInfoCircle: React.FC<MinaInfoCircleProps>;
export default MinaInfoCircle;
