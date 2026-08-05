import React from 'react';

export interface MinaIntersectProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaIntersect(props: MinaIntersectProps): React.ReactElement;
export default MinaIntersect;
