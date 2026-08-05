import React from 'react';

export interface LanKeyboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeyboardSolid(props: LanKeyboardSolidProps): React.ReactElement;
export default LanKeyboardSolid;
