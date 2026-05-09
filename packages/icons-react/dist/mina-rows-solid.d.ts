import React from 'react';

export interface MinaRowsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRowsSolid: React.FC<MinaRowsSolidProps>;
export default MinaRowsSolid;
