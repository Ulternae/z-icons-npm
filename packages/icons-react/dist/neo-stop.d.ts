import React from 'react';

export interface NeoStopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoStop: React.FC<NeoStopProps>;
export default NeoStop;
