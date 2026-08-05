import React from 'react';

export interface LanUsdSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsdSquareSolid(props: LanUsdSquareSolidProps): React.ReactElement;
export default LanUsdSquareSolid;
