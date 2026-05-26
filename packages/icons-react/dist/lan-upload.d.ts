import React from 'react';

export interface LanUploadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpload: React.FC<LanUploadProps>;
export default LanUpload;
