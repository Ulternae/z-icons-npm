import React from 'react';

export interface LanGamepadAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGamepadAlt(props: LanGamepadAltProps): React.ReactElement;
export default LanGamepadAlt;
