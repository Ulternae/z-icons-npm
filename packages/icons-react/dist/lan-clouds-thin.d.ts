import React from 'react';

export interface LanCloudsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudsThin: React.FC<LanCloudsThinProps>;
export default LanCloudsThin;
