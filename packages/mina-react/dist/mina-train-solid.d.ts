import React from 'react';

export interface MinaTrainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTrainSolid(props: MinaTrainSolidProps): React.ReactElement;
export default MinaTrainSolid;
