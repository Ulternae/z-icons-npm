import React from 'react';

export interface LanKeyboardDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeyboardDown(props: LanKeyboardDownProps): React.ReactElement;
export default LanKeyboardDown;
