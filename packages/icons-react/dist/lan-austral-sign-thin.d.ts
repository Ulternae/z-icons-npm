import React from 'react';

export interface LanAustralSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAustralSignThin: React.FC<LanAustralSignThinProps>;
export default LanAustralSignThin;
