import React from 'react';

export interface LanUserViewfinderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserViewfinderSolid(props: LanUserViewfinderSolidProps): React.ReactElement;
export default LanUserViewfinderSolid;
