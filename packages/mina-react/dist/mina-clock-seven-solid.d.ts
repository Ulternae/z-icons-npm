import React from 'react';

export interface MinaClockSevenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockSevenSolid(props: MinaClockSevenSolidProps): React.ReactElement;
export default MinaClockSevenSolid;
