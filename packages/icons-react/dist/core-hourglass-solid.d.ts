import React from 'react';

export interface CoreHourglassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreHourglassSolid: React.FC<CoreHourglassSolidProps>;
export default CoreHourglassSolid;
