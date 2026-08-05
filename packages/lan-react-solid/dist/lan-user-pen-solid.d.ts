import React from 'react';

export interface LanUserPenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserPenSolid(props: LanUserPenSolidProps): React.ReactElement;
export default LanUserPenSolid;
