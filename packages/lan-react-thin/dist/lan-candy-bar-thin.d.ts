import React from 'react';

export interface LanCandyBarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandyBarThin(props: LanCandyBarThinProps): React.ReactElement;
export default LanCandyBarThin;
