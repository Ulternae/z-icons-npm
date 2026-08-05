import React from 'react';

export interface MinaLockCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLockCircle(props: MinaLockCircleProps): React.ReactElement;
export default MinaLockCircle;
