import React from 'react';

export interface LanSquareAustralSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareAustralSolid(props: LanSquareAustralSolidProps): React.ReactElement;
export default LanSquareAustralSolid;
