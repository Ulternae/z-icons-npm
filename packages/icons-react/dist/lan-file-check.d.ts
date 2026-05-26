import React from 'react';

export interface LanFileCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCheck: React.FC<LanFileCheckProps>;
export default LanFileCheck;
