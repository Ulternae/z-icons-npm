import React from 'react';

export interface LanDedentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDedentSolid(props: LanDedentSolidProps): React.ReactElement;
export default LanDedentSolid;
