import React from 'react';

export interface MinaStopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStop(props: MinaStopProps): React.ReactElement;
export default MinaStop;
