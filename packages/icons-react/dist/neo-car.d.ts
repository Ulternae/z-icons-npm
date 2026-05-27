import React from 'react';

export interface NeoCarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCar: React.FC<NeoCarProps>;
export default NeoCar;
