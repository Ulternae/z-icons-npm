import React from 'react';

export interface MinaPercentageOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPercentageOctagon(props: MinaPercentageOctagonProps): React.ReactElement;
export default MinaPercentageOctagon;
