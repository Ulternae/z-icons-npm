import React from 'react';

export interface LanKeyboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeyboard(props: LanKeyboardProps): React.ReactElement;
export default LanKeyboard;
