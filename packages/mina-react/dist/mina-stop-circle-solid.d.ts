import React from 'react';

export interface MinaStopCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStopCircleSolid(props: MinaStopCircleSolidProps): React.ReactElement;
export default MinaStopCircleSolid;
