import React from 'react';

export interface LanCandyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandyThin(props: LanCandyThinProps): React.ReactElement;
export default LanCandyThin;
