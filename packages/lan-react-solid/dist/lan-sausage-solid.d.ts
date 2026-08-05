import React from 'react';

export interface LanSausageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSausageSolid(props: LanSausageSolidProps): React.ReactElement;
export default LanSausageSolid;
