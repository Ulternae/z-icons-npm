import React from 'react';

export interface LanDollyBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDollyBox: React.FC<LanDollyBoxProps>;
export default LanDollyBox;
