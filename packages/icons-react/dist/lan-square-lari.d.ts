import React from 'react';

export interface LanSquareLariProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareLari: React.FC<LanSquareLariProps>;
export default LanSquareLari;
