import React from 'react';

export interface LanCircleEuroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEuroSolid(props: LanCircleEuroSolidProps): React.ReactElement;
export default LanCircleEuroSolid;
