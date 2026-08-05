import React from 'react';

export interface LanShovelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShovelSolid(props: LanShovelSolidProps): React.ReactElement;
export default LanShovelSolid;
