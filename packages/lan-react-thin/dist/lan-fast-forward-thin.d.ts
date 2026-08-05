import React from 'react';

export interface LanFastForwardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFastForwardThin(props: LanFastForwardThinProps): React.ReactElement;
export default LanFastForwardThin;
