import React from 'react';

export interface MinaXCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaXCircle: React.FC<MinaXCircleProps>;
export default MinaXCircle;
