import React from 'react';

export interface CoreKeyboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreKeyboard(props: CoreKeyboardProps): React.ReactElement;
export default CoreKeyboard;
