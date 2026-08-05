import React from 'react';

export interface LanDotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDotThin(props: LanDotThinProps): React.ReactElement;
export default LanDotThin;
