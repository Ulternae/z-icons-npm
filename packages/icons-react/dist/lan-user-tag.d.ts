import React from 'react';

export interface LanUserTagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserTag: React.FC<LanUserTagProps>;
export default LanUserTag;
