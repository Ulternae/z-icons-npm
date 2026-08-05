import React from 'react';

export interface LanFlashlightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlashlightSolid(props: LanFlashlightSolidProps): React.ReactElement;
export default LanFlashlightSolid;
