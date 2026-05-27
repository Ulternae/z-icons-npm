import React from 'react';

export interface NeoAngleLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAngleLeft: React.FC<NeoAngleLeftProps>;
export default NeoAngleLeft;
