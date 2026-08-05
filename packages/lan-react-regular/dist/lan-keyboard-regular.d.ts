import React from 'react';

export interface LanKeyboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeyboardRegular(props: LanKeyboardRegularProps): React.ReactElement;
export default LanKeyboardRegular;
