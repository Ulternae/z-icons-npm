import React from 'react';

export interface LanHorizontalRuleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorizontalRuleRegular: React.FC<LanHorizontalRuleRegularProps>;
export default LanHorizontalRuleRegular;
