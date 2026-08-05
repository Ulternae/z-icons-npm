import React from 'react';

export interface LanSortUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSortUpSolid(props: LanSortUpSolidProps): React.ReactElement;
export default LanSortUpSolid;
