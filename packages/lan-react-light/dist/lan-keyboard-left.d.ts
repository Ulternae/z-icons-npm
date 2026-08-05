import React from 'react';

export interface LanKeyboardLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeyboardLeft(props: LanKeyboardLeftProps): React.ReactElement;
export default LanKeyboardLeft;
