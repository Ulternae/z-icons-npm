import React from 'react';

export interface LanPickaxeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPickaxeThin: React.FC<LanPickaxeThinProps>;
export default LanPickaxeThin;
