import React from 'react';

export interface LanCodeBranchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeBranchRegular(props: LanCodeBranchRegularProps): React.ReactElement;
export default LanCodeBranchRegular;
