import React from 'react';

export interface LanHorizontalRuleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorizontalRuleThin(props: LanHorizontalRuleThinProps): React.ReactElement;
export default LanHorizontalRuleThin;
