import React from 'react';

export interface LanScalpelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScalpelThin(props: LanScalpelThinProps): React.ReactElement;
export default LanScalpelThin;
