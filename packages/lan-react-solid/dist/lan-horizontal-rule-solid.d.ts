import React from 'react';

export interface LanHorizontalRuleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorizontalRuleSolid(props: LanHorizontalRuleSolidProps): React.ReactElement;
export default LanHorizontalRuleSolid;
