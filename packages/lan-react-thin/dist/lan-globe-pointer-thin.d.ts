import React from 'react';

export interface LanGlobePointerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobePointerThin(props: LanGlobePointerThinProps): React.ReactElement;
export default LanGlobePointerThin;
