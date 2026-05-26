import React from 'react';

export interface LanXmarkLargeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanXmarkLargeThin: React.FC<LanXmarkLargeThinProps>;
export default LanXmarkLargeThin;
