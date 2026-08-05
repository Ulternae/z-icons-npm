import React from 'react';

export interface LanArrowProgressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowProgressSolid(props: LanArrowProgressSolidProps): React.ReactElement;
export default LanArrowProgressSolid;
