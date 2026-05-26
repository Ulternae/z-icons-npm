import React from 'react';

export interface LanBlockQuoteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlockQuoteSolid: React.FC<LanBlockQuoteSolidProps>;
export default LanBlockQuoteSolid;
