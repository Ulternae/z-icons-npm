import React from 'react';

export interface LanFileFragmentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileFragmentThin(props: LanFileFragmentThinProps): React.ReactElement;
export default LanFileFragmentThin;
