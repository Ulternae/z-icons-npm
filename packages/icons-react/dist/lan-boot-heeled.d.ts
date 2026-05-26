import React from 'react';

export interface LanBootHeeledProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBootHeeled: React.FC<LanBootHeeledProps>;
export default LanBootHeeled;
