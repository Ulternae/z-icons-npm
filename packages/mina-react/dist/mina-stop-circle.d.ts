import React from 'react';

export interface MinaStopCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStopCircle(props: MinaStopCircleProps): React.ReactElement;
export default MinaStopCircle;
