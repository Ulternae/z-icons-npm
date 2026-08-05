import React from 'react';

export interface LanPlaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlane(props: LanPlaneProps): React.ReactElement;
export default LanPlane;
