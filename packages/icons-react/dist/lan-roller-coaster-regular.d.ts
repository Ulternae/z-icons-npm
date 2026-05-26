import React from 'react';

export interface LanRollerCoasterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRollerCoasterRegular: React.FC<LanRollerCoasterRegularProps>;
export default LanRollerCoasterRegular;
