import React from 'react';

export interface LanDrawPolygonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrawPolygon: React.FC<LanDrawPolygonProps>;
export default LanDrawPolygon;
