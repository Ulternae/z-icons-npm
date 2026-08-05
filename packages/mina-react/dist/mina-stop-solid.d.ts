import React from 'react';

export interface MinaStopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStopSolid(props: MinaStopSolidProps): React.ReactElement;
export default MinaStopSolid;
