import React from 'react';

export interface MinaBrandAppleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandAppleSolid: React.FC<MinaBrandAppleSolidProps>;
export default MinaBrandAppleSolid;
