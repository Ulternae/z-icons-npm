import React from 'react';

export interface MinaPercentageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPercentageSolid(props: MinaPercentageSolidProps): React.ReactElement;
export default MinaPercentageSolid;
