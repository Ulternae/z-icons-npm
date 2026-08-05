import React from 'react';

export interface NeoCalendarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCalendarSolid(props: NeoCalendarSolidProps): React.ReactElement;
export default NeoCalendarSolid;
