import React from 'react';

export interface LanRollerCoasterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRollerCoasterThin(props: LanRollerCoasterThinProps): React.ReactElement;
export default LanRollerCoasterThin;
