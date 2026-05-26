import React from 'react';

export interface LanCloudFogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudFogSolid: React.FC<LanCloudFogSolidProps>;
export default LanCloudFogSolid;
