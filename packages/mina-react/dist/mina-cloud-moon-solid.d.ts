import React from 'react';

export interface MinaCloudMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudMoonSolid(props: MinaCloudMoonSolidProps): React.ReactElement;
export default MinaCloudMoonSolid;
