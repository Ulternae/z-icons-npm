import React from 'react';

export interface MinaKeyboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaKeyboard(props: MinaKeyboardProps): React.ReactElement;
export default MinaKeyboard;
