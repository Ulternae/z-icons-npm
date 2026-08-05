import React from 'react';

export interface MinaUserCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserCircle(props: MinaUserCircleProps): React.ReactElement;
export default MinaUserCircle;
