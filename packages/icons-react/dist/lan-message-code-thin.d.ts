import React from 'react';

export interface LanMessageCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageCodeThin: React.FC<LanMessageCodeThinProps>;
export default LanMessageCodeThin;
