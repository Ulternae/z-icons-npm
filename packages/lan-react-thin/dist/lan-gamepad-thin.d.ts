import React from 'react';

export interface LanGamepadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGamepadThin(props: LanGamepadThinProps): React.ReactElement;
export default LanGamepadThin;
