import React from 'react';

export interface LanSquareRupiahSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareRupiahSolid(props: LanSquareRupiahSolidProps): React.ReactElement;
export default LanSquareRupiahSolid;
