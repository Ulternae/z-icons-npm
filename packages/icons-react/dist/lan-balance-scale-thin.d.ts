import React from 'react';

export interface LanBalanceScaleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBalanceScaleThin: React.FC<LanBalanceScaleThinProps>;
export default LanBalanceScaleThin;
