import React from 'react';

export interface LanSplotchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSplotchSolid(props: LanSplotchSolidProps): React.ReactElement;
export default LanSplotchSolid;
