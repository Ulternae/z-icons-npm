import React from 'react';

export interface LanSackDollarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSackDollarSolid(props: LanSackDollarSolidProps): React.ReactElement;
export default LanSackDollarSolid;
