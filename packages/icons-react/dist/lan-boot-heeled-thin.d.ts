import React from 'react';

export interface LanBootHeeledThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBootHeeledThin: React.FC<LanBootHeeledThinProps>;
export default LanBootHeeledThin;
