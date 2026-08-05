import React from 'react';

export interface LanSortDescThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSortDescThin(props: LanSortDescThinProps): React.ReactElement;
export default LanSortDescThin;
