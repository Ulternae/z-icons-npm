import React from 'react';

export interface LanDrawPolygonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrawPolygonThin(props: LanDrawPolygonThinProps): React.ReactElement;
export default LanDrawPolygonThin;
