import React from 'react';

export interface LanRaygunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRaygun(props: LanRaygunProps): React.ReactElement;
export default LanRaygun;
