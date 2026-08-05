import React from 'react';

export interface LanZzzThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanZzzThin(props: LanZzzThinProps): React.ReactElement;
export default LanZzzThin;
