import React from 'react';

export interface LanIntegralSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIntegralSolid(props: LanIntegralSolidProps): React.ReactElement;
export default LanIntegralSolid;
