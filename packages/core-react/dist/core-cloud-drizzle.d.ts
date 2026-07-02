import React from 'react';

export interface CoreCloudDrizzleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCloudDrizzle(props: CoreCloudDrizzleProps): React.ReactElement;
export default CoreCloudDrizzle;
