import React from 'react';

export interface CoreWindProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWind: React.FC<CoreWindProps>;
export default CoreWind;
