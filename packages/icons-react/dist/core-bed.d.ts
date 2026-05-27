import React from 'react';

export interface CoreBedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBed: React.FC<CoreBedProps>;
export default CoreBed;
