import React from 'react';

export interface LanZapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanZapSolid(props: LanZapSolidProps): React.ReactElement;
export default LanZapSolid;
