import React from 'react';

export interface LanBackwardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBackwardThin(props: LanBackwardThinProps): React.ReactElement;
export default LanBackwardThin;
