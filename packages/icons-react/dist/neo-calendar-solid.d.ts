import React from 'react';

export interface NeoCalendarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCalendarSolid: React.FC<NeoCalendarSolidProps>;
export default NeoCalendarSolid;
