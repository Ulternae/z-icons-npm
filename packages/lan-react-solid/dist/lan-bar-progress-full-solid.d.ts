import React from 'react';

export interface LanBarProgressFullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarProgressFullSolid(props: LanBarProgressFullSolidProps): React.ReactElement;
export default LanBarProgressFullSolid;
