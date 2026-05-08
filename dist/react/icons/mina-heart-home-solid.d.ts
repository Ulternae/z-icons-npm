import React from 'react';

export interface MinaHeartHomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartHomeSolid: React.FC<MinaHeartHomeSolidProps>;
export default MinaHeartHomeSolid;
