import React from 'react';

export interface LanCloudMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMinusThin: React.FC<LanCloudMinusThinProps>;
export default LanCloudMinusThin;
