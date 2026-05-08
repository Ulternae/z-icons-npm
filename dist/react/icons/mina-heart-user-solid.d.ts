import React from 'react';

export interface MinaHeartUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartUserSolid: React.FC<MinaHeartUserSolidProps>;
export default MinaHeartUserSolid;
