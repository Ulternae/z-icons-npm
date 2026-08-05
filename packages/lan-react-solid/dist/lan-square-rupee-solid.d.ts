import React from 'react';

export interface LanSquareRupeeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareRupeeSolid(props: LanSquareRupeeSolidProps): React.ReactElement;
export default LanSquareRupeeSolid;
