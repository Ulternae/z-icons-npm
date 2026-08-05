import React from 'react';

export interface MinaPackageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPackageSolid(props: MinaPackageSolidProps): React.ReactElement;
export default MinaPackageSolid;
