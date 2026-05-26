import React from 'react';

export interface LanFaceSadCryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSadCry: React.FC<LanFaceSadCryProps>;
export default LanFaceSadCry;
