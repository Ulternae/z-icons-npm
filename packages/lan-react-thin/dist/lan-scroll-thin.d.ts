import React from 'react';

export interface LanScrollThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrollThin(props: LanScrollThinProps): React.ReactElement;
export default LanScrollThin;
