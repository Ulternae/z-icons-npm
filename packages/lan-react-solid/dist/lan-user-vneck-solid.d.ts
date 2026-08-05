import React from 'react';

export interface LanUserVneckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserVneckSolid(props: LanUserVneckSolidProps): React.ReactElement;
export default LanUserVneckSolid;
