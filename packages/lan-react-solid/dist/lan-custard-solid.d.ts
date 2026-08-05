import React from 'react';

export interface LanCustardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCustardSolid(props: LanCustardSolidProps): React.ReactElement;
export default LanCustardSolid;
