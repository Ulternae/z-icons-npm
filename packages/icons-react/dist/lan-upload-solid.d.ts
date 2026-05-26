import React from 'react';

export interface LanUploadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUploadSolid: React.FC<LanUploadSolidProps>;
export default LanUploadSolid;
