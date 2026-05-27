import React from 'react';

export interface NeoPersonBikingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPersonBiking: React.FC<NeoPersonBikingProps>;
export default NeoPersonBiking;
