import React from 'react';

export interface LanManholeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanManholeThin: React.FC<LanManholeThinProps>;
export default LanManholeThin;
