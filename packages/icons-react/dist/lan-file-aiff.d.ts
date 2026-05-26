import React from 'react';

export interface LanFileAiffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileAiff: React.FC<LanFileAiffProps>;
export default LanFileAiff;
