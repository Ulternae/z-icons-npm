import React from 'react';

export interface MinaLeafSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLeafSolid: React.FC<MinaLeafSolidProps>;
export default MinaLeafSolid;
