import React from 'react';

export interface LanUserTagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserTagSolid(props: LanUserTagSolidProps): React.ReactElement;
export default LanUserTagSolid;
