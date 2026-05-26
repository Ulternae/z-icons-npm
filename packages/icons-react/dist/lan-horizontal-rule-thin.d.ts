import React from 'react';

export interface LanHorizontalRuleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorizontalRuleThin: React.FC<LanHorizontalRuleThinProps>;
export default LanHorizontalRuleThin;
