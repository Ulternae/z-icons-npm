import React from 'react';

export interface MinaCloudSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudSunSolid(props: MinaCloudSunSolidProps): React.ReactElement;
export default MinaCloudSunSolid;
