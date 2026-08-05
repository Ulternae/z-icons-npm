import React from 'react';

export interface CoreKeyboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreKeyboardSolid(props: CoreKeyboardSolidProps): React.ReactElement;
export default CoreKeyboardSolid;
