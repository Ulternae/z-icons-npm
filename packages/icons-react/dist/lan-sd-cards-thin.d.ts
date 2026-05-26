import React from 'react';

export interface LanSdCardsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSdCardsThin: React.FC<LanSdCardsThinProps>;
export default LanSdCardsThin;
