import React from 'react';

export interface CoreBedEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBedEmptySolid: React.FC<CoreBedEmptySolidProps>;
export default CoreBedEmptySolid;
