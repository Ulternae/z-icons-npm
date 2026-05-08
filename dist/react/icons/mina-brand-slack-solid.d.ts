import React from 'react';

export interface MinaBrandSlackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandSlackSolid: React.FC<MinaBrandSlackSolidProps>;
export default MinaBrandSlackSolid;
