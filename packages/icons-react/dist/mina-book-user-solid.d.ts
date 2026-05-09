import React from 'react';

export interface MinaBookUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookUserSolid: React.FC<MinaBookUserSolidProps>;
export default MinaBookUserSolid;
