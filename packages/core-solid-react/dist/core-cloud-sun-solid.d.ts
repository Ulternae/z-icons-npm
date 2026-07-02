import React from 'react';

export interface CoreCloudSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCloudSunSolid(props: CoreCloudSunSolidProps): React.ReactElement;
export default CoreCloudSunSolid;
