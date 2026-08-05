import React from 'react';

export interface LanDrawPolygonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrawPolygon(props: LanDrawPolygonProps): React.ReactElement;
export default LanDrawPolygon;
