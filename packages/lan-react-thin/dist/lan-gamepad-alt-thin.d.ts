import React from 'react';

export interface LanGamepadAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGamepadAltThin(props: LanGamepadAltThinProps): React.ReactElement;
export default LanGamepadAltThin;
