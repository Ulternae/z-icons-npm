import React from 'react';

export interface LanTintSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTintSolid(props: LanTintSolidProps): React.ReactElement;
export default LanTintSolid;
