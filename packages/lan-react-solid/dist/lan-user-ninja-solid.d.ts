import React from 'react';

export interface LanUserNinjaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserNinjaSolid(props: LanUserNinjaSolidProps): React.ReactElement;
export default LanUserNinjaSolid;
