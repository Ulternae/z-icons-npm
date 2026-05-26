import React from 'react';

export interface LanOliveBranchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOliveBranchRegular: React.FC<LanOliveBranchRegularProps>;
export default LanOliveBranchRegular;
