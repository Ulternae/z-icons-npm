import React from 'react';

export interface LanRaygunThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRaygunThin(props: LanRaygunThinProps): React.ReactElement;
export default LanRaygunThin;
