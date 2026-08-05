import React from 'react';

export interface LanArrowsSpinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsSpinSolid(props: LanArrowsSpinSolidProps): React.ReactElement;
export default LanArrowsSpinSolid;
