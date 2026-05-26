import React from 'react';

export interface LanMergeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMergeThin: React.FC<LanMergeThinProps>;
export default LanMergeThin;
