import React from 'react';

export interface MinaPackageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPackage: React.FC<MinaPackageProps>;
export default MinaPackage;
