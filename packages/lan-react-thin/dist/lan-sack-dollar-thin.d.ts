import React from 'react';

export interface LanSackDollarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSackDollarThin(props: LanSackDollarThinProps): React.ReactElement;
export default LanSackDollarThin;
