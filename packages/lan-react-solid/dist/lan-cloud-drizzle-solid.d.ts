import React from 'react';

export interface LanCloudDrizzleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudDrizzleSolid(props: LanCloudDrizzleSolidProps): React.ReactElement;
export default LanCloudDrizzleSolid;
