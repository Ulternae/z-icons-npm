import React from 'react';

export interface LanChairThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChairThin(props: LanChairThinProps): React.ReactElement;
export default LanChairThin;
