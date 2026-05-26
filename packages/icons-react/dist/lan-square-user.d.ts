import React from 'react';

export interface LanSquareUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareUser: React.FC<LanSquareUserProps>;
export default LanSquareUser;
