import React from 'react';

export interface MinaMoveHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMoveHorizontalSolid: React.FC<MinaMoveHorizontalSolidProps>;
export default MinaMoveHorizontalSolid;
