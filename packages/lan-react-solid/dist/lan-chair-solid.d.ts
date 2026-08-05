import React from 'react';

export interface LanChairSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChairSolid(props: LanChairSolidProps): React.ReactElement;
export default LanChairSolid;
