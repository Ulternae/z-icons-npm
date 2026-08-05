import React from 'react';

export interface LanWindowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowThin(props: LanWindowThinProps): React.ReactElement;
export default LanWindowThin;
