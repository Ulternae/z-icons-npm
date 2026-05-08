import React from 'react';

export interface MinaVolumePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVolumePlus: React.FC<MinaVolumePlusProps>;
export default MinaVolumePlus;
