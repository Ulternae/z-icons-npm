import React from 'react';

export interface LanSortDescProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSortDesc(props: LanSortDescProps): React.ReactElement;
export default LanSortDesc;
