import React from 'react';

export interface LanSortDescSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSortDescSolid(props: LanSortDescSolidProps): React.ReactElement;
export default LanSortDescSolid;
