import React from 'react';

export interface LanBlockQuoteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlockQuoteThin: React.FC<LanBlockQuoteThinProps>;
export default LanBlockQuoteThin;
