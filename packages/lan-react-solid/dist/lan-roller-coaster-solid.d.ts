import React from 'react';

export interface LanRollerCoasterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRollerCoasterSolid(props: LanRollerCoasterSolidProps): React.ReactElement;
export default LanRollerCoasterSolid;
