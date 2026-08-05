import React from 'react';

export interface LanSportsballSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSportsballSolid(props: LanSportsballSolidProps): React.ReactElement;
export default LanSportsballSolid;
