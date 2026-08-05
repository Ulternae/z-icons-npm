import React from 'react';

export interface LanPlaneAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneAlt(props: LanPlaneAltProps): React.ReactElement;
export default LanPlaneAlt;
