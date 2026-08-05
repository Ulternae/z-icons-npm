import React from 'react';

export interface LanGamepadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGamepadSolid(props: LanGamepadSolidProps): React.ReactElement;
export default LanGamepadSolid;
