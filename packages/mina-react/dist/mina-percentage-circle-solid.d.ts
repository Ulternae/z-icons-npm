import React from 'react';

export interface MinaPercentageCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPercentageCircleSolid(props: MinaPercentageCircleSolidProps): React.ReactElement;
export default MinaPercentageCircleSolid;
