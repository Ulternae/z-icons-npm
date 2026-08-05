import React from 'react';

export interface NeoPlaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPlane(props: NeoPlaneProps): React.ReactElement;
export default NeoPlane;
