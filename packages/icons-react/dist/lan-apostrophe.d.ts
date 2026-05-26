import React from 'react';

export interface LanApostropheProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanApostrophe: React.FC<LanApostropheProps>;
export default LanApostrophe;
