import React from 'react';

export interface MinaPackageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPackage(props: MinaPackageProps): React.ReactElement;
export default MinaPackage;
