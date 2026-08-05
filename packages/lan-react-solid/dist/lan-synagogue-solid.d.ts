import React from 'react';

export interface LanSynagogueSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSynagogueSolid(props: LanSynagogueSolidProps): React.ReactElement;
export default LanSynagogueSolid;
