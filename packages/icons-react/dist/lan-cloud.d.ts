import React from 'react';

export interface LanCloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloud: React.FC<LanCloudProps>;
export default LanCloud;
