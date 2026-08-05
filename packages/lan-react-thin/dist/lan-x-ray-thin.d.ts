import React from 'react';

export interface LanXRayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanXRayThin(props: LanXRayThinProps): React.ReactElement;
export default LanXRayThin;
