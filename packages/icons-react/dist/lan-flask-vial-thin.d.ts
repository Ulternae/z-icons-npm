import React from 'react';

export interface LanFlaskVialThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlaskVialThin: React.FC<LanFlaskVialThinProps>;
export default LanFlaskVialThin;
