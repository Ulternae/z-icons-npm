import React from 'react';

export interface LanSortThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSortThin(props: LanSortThinProps): React.ReactElement;
export default LanSortThin;
