import React from 'react';

export interface CoreCloudDrizzleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCloudDrizzleSolid(props: CoreCloudDrizzleSolidProps): React.ReactElement;
export default CoreCloudDrizzleSolid;
