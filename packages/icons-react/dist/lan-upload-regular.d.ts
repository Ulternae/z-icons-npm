import React from 'react';

export interface LanUploadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUploadRegular: React.FC<LanUploadRegularProps>;
export default LanUploadRegular;
