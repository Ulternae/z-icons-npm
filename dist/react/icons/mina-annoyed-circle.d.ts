import React from 'react';

export interface MinaAnnoyedCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAnnoyedCircle: React.FC<MinaAnnoyedCircleProps>;
export default MinaAnnoyedCircle;
