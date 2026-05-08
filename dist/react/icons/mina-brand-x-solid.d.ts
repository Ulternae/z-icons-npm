import React from 'react';

export interface MinaBrandXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandXSolid: React.FC<MinaBrandXSolidProps>;
export default MinaBrandXSolid;
