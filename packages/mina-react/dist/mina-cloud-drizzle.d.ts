import React from 'react';

export interface MinaCloudDrizzleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudDrizzle(props: MinaCloudDrizzleProps): React.ReactElement;
export default MinaCloudDrizzle;
