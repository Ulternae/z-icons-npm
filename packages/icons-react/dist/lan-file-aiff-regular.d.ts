import React from 'react';

export interface LanFileAiffRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileAiffRegular: React.FC<LanFileAiffRegularProps>;
export default LanFileAiffRegular;
