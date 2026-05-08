import React from 'react';

export interface MinaBrandFramerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandFramerSolid: React.FC<MinaBrandFramerSolidProps>;
export default MinaBrandFramerSolid;
