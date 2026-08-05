import React from 'react';

export interface LanRollerCoasterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRollerCoasterRegular(props: LanRollerCoasterRegularProps): React.ReactElement;
export default LanRollerCoasterRegular;
