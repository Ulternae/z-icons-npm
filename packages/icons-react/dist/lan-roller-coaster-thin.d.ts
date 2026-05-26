import React from 'react';

export interface LanRollerCoasterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRollerCoasterThin: React.FC<LanRollerCoasterThinProps>;
export default LanRollerCoasterThin;
