import React from 'react';

export interface MinaCodeCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCodeCircleSolid(props: MinaCodeCircleSolidProps): React.ReactElement;
export default MinaCodeCircleSolid;
