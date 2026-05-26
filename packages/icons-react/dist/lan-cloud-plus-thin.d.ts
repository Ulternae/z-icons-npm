import React from 'react';

export interface LanCloudPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudPlusThin: React.FC<LanCloudPlusThinProps>;
export default LanCloudPlusThin;
