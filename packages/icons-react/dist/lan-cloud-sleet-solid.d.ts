import React from 'react';

export interface LanCloudSleetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSleetSolid: React.FC<LanCloudSleetSolidProps>;
export default LanCloudSleetSolid;
