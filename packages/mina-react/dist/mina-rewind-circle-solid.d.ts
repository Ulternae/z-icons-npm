import React from 'react';

export interface MinaRewindCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRewindCircleSolid(props: MinaRewindCircleSolidProps): React.ReactElement;
export default MinaRewindCircleSolid;
