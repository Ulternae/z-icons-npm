import React from 'react';

export interface LanHandPointDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointDownSolid(props: LanHandPointDownSolidProps): React.ReactElement;
export default LanHandPointDownSolid;
