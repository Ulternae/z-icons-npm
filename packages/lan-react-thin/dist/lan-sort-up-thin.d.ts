import React from 'react';

export interface LanSortUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSortUpThin(props: LanSortUpThinProps): React.ReactElement;
export default LanSortUpThin;
