import React from 'react';

export interface CoreRadioSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRadioSolid: React.FC<CoreRadioSolidProps>;
export default CoreRadioSolid;
