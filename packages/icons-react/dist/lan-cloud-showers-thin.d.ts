import React from 'react';

export interface LanCloudShowersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudShowersThin: React.FC<LanCloudShowersThinProps>;
export default LanCloudShowersThin;
