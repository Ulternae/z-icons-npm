import React from 'react';

export interface MinaPercentageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPercentageSolid: React.FC<MinaPercentageSolidProps>;
export default MinaPercentageSolid;
