import React from 'react';

export interface LanRollerCoasterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRollerCoaster(props: LanRollerCoasterProps): React.ReactElement;
export default LanRollerCoaster;
