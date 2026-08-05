import React from 'react';

export interface NeoTrainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTrainSolid(props: NeoTrainSolidProps): React.ReactElement;
export default NeoTrainSolid;
