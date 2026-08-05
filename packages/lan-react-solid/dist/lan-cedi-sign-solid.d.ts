import React from 'react';

export interface LanCediSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCediSignSolid(props: LanCediSignSolidProps): React.ReactElement;
export default LanCediSignSolid;
