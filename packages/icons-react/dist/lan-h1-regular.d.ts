import React from 'react';

export interface LanH1RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH1Regular: React.FC<LanH1RegularProps>;
export default LanH1Regular;
