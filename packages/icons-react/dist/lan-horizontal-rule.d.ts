import React from 'react';

export interface LanHorizontalRuleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorizontalRule: React.FC<LanHorizontalRuleProps>;
export default LanHorizontalRule;
