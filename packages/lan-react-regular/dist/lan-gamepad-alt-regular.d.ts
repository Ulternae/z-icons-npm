import React from 'react';

export interface LanGamepadAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGamepadAltRegular(props: LanGamepadAltRegularProps): React.ReactElement;
export default LanGamepadAltRegular;
