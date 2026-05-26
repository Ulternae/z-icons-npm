import React from 'react';

export interface LanDrawPolygonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrawPolygonThin: React.FC<LanDrawPolygonThinProps>;
export default LanDrawPolygonThin;
