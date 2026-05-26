import React from 'react';

export interface LanHomeBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHomeBlank: React.FC<LanHomeBlankProps>;
export default LanHomeBlank;
