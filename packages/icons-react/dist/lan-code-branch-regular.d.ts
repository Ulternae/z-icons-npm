import React from 'react';

export interface LanCodeBranchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeBranchRegular: React.FC<LanCodeBranchRegularProps>;
export default LanCodeBranchRegular;
