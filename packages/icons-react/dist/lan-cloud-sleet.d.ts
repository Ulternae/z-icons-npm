import React from 'react';

export interface LanCloudSleetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSleet: React.FC<LanCloudSleetProps>;
export default LanCloudSleet;
