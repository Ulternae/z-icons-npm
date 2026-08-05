import React from 'react';

export interface LanDrawPolygonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrawPolygonSolid(props: LanDrawPolygonSolidProps): React.ReactElement;
export default LanDrawPolygonSolid;
