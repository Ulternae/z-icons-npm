import React from 'react';

export interface LanFileZipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileZip: React.FC<LanFileZipProps>;
export default LanFileZip;
