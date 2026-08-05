import React from 'react';

export interface LanRulerCombinedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerCombinedSolid(props: LanRulerCombinedSolidProps): React.ReactElement;
export default LanRulerCombinedSolid;
