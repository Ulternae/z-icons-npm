import React from 'react';

export interface CorePersonBikingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePersonBiking: React.FC<CorePersonBikingProps>;
export default CorePersonBiking;
