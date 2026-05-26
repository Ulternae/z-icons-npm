import React from 'react';

export interface LanCloudArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudArrowDown: React.FC<LanCloudArrowDownProps>;
export default LanCloudArrowDown;
