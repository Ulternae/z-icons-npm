import React from 'react';

export interface LanGamepadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGamepad(props: LanGamepadProps): React.ReactElement;
export default LanGamepad;
