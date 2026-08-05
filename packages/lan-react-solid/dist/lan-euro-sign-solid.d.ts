import React from 'react';

export interface LanEuroSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEuroSignSolid(props: LanEuroSignSolidProps): React.ReactElement;
export default LanEuroSignSolid;
