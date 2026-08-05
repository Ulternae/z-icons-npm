import React from 'react';

export interface LanScarecrowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScarecrowSolid(props: LanScarecrowSolidProps): React.ReactElement;
export default LanScarecrowSolid;
