import React from 'react';

export interface MinaClockOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockOctagonSolid(props: MinaClockOctagonSolidProps): React.ReactElement;
export default MinaClockOctagonSolid;
