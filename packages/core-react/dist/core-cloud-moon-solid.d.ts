import React from 'react';

export interface CoreCloudMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCloudMoonSolid(props: CoreCloudMoonSolidProps): React.ReactElement;
export default CoreCloudMoonSolid;
