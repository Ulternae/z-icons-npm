import React from 'react';

export interface MinaBrandCodepenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandCodepenSolid: React.FC<MinaBrandCodepenSolidProps>;
export default MinaBrandCodepenSolid;
