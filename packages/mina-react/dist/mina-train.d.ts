import React from 'react';

export interface MinaTrainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTrain(props: MinaTrainProps): React.ReactElement;
export default MinaTrain;
