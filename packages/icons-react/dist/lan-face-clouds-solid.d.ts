import React from 'react';

export interface LanFaceCloudsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceCloudsSolid: React.FC<LanFaceCloudsSolidProps>;
export default LanFaceCloudsSolid;
