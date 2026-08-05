import React from 'react';

export interface LanGamepadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGamepadRegular(props: LanGamepadRegularProps): React.ReactElement;
export default LanGamepadRegular;
