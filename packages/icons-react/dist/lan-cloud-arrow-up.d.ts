import React from 'react';

export interface LanCloudArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudArrowUp: React.FC<LanCloudArrowUpProps>;
export default LanCloudArrowUp;
