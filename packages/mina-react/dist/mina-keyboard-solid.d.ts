import React from 'react';

export interface MinaKeyboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaKeyboardSolid(props: MinaKeyboardSolidProps): React.ReactElement;
export default MinaKeyboardSolid;
