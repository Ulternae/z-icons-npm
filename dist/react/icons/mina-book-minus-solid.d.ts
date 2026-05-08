import React from 'react';

export interface MinaBookMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookMinusSolid: React.FC<MinaBookMinusSolidProps>;
export default MinaBookMinusSolid;
