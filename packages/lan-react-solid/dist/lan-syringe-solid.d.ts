import React from 'react';

export interface LanSyringeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSyringeSolid(props: LanSyringeSolidProps): React.ReactElement;
export default LanSyringeSolid;
