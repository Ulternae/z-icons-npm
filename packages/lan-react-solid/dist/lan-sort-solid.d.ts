import React from 'react';

export interface LanSortSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSortSolid(props: LanSortSolidProps): React.ReactElement;
export default LanSortSolid;
