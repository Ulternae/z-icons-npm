import React from 'react';

export interface LanCloudDrizzleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudDrizzleThin: React.FC<LanCloudDrizzleThinProps>;
export default LanCloudDrizzleThin;
