import React from 'react';

export interface MinaCloudDrizzleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudDrizzle: React.FC<MinaCloudDrizzleProps>;
export default MinaCloudDrizzle;
