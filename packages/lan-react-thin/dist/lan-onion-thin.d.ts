import React from 'react';

export interface LanOnionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOnionThin(props: LanOnionThinProps): React.ReactElement;
export default LanOnionThin;
