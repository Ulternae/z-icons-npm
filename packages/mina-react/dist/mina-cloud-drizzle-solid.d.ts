import React from 'react';

export interface MinaCloudDrizzleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudDrizzleSolid(props: MinaCloudDrizzleSolidProps): React.ReactElement;
export default MinaCloudDrizzleSolid;
