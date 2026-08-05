import React from 'react';

export interface LanLariSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLariSignSolid(props: LanLariSignSolidProps): React.ReactElement;
export default LanLariSignSolid;
