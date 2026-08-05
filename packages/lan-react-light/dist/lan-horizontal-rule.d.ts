import React from 'react';

export interface LanHorizontalRuleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorizontalRule(props: LanHorizontalRuleProps): React.ReactElement;
export default LanHorizontalRule;
