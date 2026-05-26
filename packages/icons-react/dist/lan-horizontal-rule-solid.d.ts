import React from 'react';

export interface LanHorizontalRuleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorizontalRuleSolid: React.FC<LanHorizontalRuleSolidProps>;
export default LanHorizontalRuleSolid;
