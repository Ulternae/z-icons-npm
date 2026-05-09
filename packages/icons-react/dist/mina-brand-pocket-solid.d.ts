import React from 'react';

export interface MinaBrandPocketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandPocketSolid: React.FC<MinaBrandPocketSolidProps>;
export default MinaBrandPocketSolid;
