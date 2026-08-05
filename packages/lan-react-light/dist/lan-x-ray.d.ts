import React from 'react';

export interface LanXRayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanXRay(props: LanXRayProps): React.ReactElement;
export default LanXRay;
