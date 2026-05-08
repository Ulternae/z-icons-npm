import React from 'react';

export interface MinaRadioSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRadioSolid: React.FC<MinaRadioSolidProps>;
export default MinaRadioSolid;
