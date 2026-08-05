import React from 'react';

export interface MinaLockCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLockCircleSolid(props: MinaLockCircleSolidProps): React.ReactElement;
export default MinaLockCircleSolid;
