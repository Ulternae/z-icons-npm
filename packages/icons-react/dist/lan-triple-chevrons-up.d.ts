import React from 'react';

export interface LanTripleChevronsUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTripleChevronsUp: React.FC<LanTripleChevronsUpProps>;
export default LanTripleChevronsUp;
