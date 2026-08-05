import React from 'react';

export interface LanHorizontalRuleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorizontalRuleRegular(props: LanHorizontalRuleRegularProps): React.ReactElement;
export default LanHorizontalRuleRegular;
