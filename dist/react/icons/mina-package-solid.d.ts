import React from 'react';

export interface MinaPackageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPackageSolid: React.FC<MinaPackageSolidProps>;
export default MinaPackageSolid;
