import React from 'react';

export interface LanDrawPolygonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrawPolygonRegular: React.FC<LanDrawPolygonRegularProps>;
export default LanDrawPolygonRegular;
