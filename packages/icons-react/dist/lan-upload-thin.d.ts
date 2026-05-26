import React from 'react';

export interface LanUploadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUploadThin: React.FC<LanUploadThinProps>;
export default LanUploadThin;
