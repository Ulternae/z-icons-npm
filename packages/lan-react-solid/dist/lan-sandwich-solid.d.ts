import React from 'react';

export interface LanSandwichSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSandwichSolid(props: LanSandwichSolidProps): React.ReactElement;
export default LanSandwichSolid;
