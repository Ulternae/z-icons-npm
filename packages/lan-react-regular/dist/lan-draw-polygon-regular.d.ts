import React from 'react';

export interface LanDrawPolygonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrawPolygonRegular(props: LanDrawPolygonRegularProps): React.ReactElement;
export default LanDrawPolygonRegular;
