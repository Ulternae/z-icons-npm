import React from 'react';

export interface LanDedentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDedentThin(props: LanDedentThinProps): React.ReactElement;
export default LanDedentThin;
