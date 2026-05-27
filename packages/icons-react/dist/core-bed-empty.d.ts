import React from 'react';

export interface CoreBedEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBedEmpty: React.FC<CoreBedEmptyProps>;
export default CoreBedEmpty;
