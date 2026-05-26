import React from 'react';

export interface LanCloudMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMinus: React.FC<LanCloudMinusProps>;
export default LanCloudMinus;
