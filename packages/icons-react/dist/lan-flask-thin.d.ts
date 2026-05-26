import React from 'react';

export interface LanFlaskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlaskThin: React.FC<LanFlaskThinProps>;
export default LanFlaskThin;
