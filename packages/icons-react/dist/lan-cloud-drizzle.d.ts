import React from 'react';

export interface LanCloudDrizzleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudDrizzle: React.FC<LanCloudDrizzleProps>;
export default LanCloudDrizzle;
