import React from 'react';

export interface NeoClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoClockSolid(props: NeoClockSolidProps): React.ReactElement;
export default NeoClockSolid;
