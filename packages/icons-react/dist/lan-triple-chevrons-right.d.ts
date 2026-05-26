import React from 'react';

export interface LanTripleChevronsRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTripleChevronsRight: React.FC<LanTripleChevronsRightProps>;
export default LanTripleChevronsRight;
