import React from 'react';

export interface NeoTrainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTrainSolid: React.FC<NeoTrainSolidProps>;
export default NeoTrainSolid;
