import React from 'react';

export interface LanPlaneAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneAltThin(props: LanPlaneAltThinProps): React.ReactElement;
export default LanPlaneAltThin;
