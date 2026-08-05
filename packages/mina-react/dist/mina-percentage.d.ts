import React from 'react';

export interface MinaPercentageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPercentage(props: MinaPercentageProps): React.ReactElement;
export default MinaPercentage;
