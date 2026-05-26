import React from 'react';

export interface LanDrawPolygonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrawPolygonSolid: React.FC<LanDrawPolygonSolidProps>;
export default LanDrawPolygonSolid;
