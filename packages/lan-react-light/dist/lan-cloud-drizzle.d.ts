import React from 'react';

export interface LanCloudDrizzleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudDrizzle(props: LanCloudDrizzleProps): React.ReactElement;
export default LanCloudDrizzle;
