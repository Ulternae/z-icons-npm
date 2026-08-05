import React from 'react';

export interface LanGamepadAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGamepadAltSolid(props: LanGamepadAltSolidProps): React.ReactElement;
export default LanGamepadAltSolid;
