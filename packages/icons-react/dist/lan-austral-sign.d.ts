import React from 'react';

export interface LanAustralSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAustralSign: React.FC<LanAustralSignProps>;
export default LanAustralSign;
