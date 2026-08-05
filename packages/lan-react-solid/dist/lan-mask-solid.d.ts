import React from 'react';

export interface LanMaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaskSolid(props: LanMaskSolidProps): React.ReactElement;
export default LanMaskSolid;
