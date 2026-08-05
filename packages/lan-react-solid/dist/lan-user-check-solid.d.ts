import React from 'react';

export interface LanUserCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserCheckSolid(props: LanUserCheckSolidProps): React.ReactElement;
export default LanUserCheckSolid;
