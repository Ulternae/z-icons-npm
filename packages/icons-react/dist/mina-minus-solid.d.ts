import React from 'react';

export interface MinaMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMinusSolid: React.FC<MinaMinusSolidProps>;
export default MinaMinusSolid;
