import React from 'react';

export interface LanCloudBinaryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudBinary: React.FC<LanCloudBinaryProps>;
export default LanCloudBinary;
