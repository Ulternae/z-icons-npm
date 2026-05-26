import React from 'react';

export interface LanCloudPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudPlus: React.FC<LanCloudPlusProps>;
export default LanCloudPlus;
