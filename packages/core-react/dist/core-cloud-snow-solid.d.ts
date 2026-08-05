import React from 'react';

export interface CoreCloudSnowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCloudSnowSolid(props: CoreCloudSnowSolidProps): React.ReactElement;
export default CoreCloudSnowSolid;
