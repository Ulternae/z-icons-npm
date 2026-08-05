import React from 'react';

export interface LanPlaneAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneAltSolid(props: LanPlaneAltSolidProps): React.ReactElement;
export default LanPlaneAltSolid;
