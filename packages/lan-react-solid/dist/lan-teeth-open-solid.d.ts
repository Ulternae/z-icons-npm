import React from 'react';

export interface LanTeethOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTeethOpenSolid(props: LanTeethOpenSolidProps): React.ReactElement;
export default LanTeethOpenSolid;
