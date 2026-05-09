import React from 'react';

export interface MinaCaravanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCaravanSolid: React.FC<MinaCaravanSolidProps>;
export default MinaCaravanSolid;
