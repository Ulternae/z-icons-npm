import React from 'react';

export interface CoreCloudDrizzleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudDrizzle: React.FC<CoreCloudDrizzleProps>;
export default CoreCloudDrizzle;
