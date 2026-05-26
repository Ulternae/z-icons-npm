import React from 'react';

export interface LanSinkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSinkThin: React.FC<LanSinkThinProps>;
export default LanSinkThin;
