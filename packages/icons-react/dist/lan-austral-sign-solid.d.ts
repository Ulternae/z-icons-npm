import React from 'react';

export interface LanAustralSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAustralSignSolid: React.FC<LanAustralSignSolidProps>;
export default LanAustralSignSolid;
