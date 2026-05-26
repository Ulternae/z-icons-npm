import React from 'react';

export interface LanAppleCoreSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAppleCoreSolid: React.FC<LanAppleCoreSolidProps>;
export default LanAppleCoreSolid;
