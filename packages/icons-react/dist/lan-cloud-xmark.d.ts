import React from 'react';

export interface LanCloudXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudXmark: React.FC<LanCloudXmarkProps>;
export default LanCloudXmark;
