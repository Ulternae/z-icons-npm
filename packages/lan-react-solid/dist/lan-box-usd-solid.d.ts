import React from 'react';

export interface LanBoxUsdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxUsdSolid(props: LanBoxUsdSolidProps): React.ReactElement;
export default LanBoxUsdSolid;
