import React from 'react';

export interface LanPercentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPercentThin(props: LanPercentThinProps): React.ReactElement;
export default LanPercentThin;
