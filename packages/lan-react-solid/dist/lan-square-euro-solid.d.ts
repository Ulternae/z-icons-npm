import React from 'react';

export interface LanSquareEuroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEuroSolid(props: LanSquareEuroSolidProps): React.ReactElement;
export default LanSquareEuroSolid;
