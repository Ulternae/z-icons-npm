import React from 'react';

export interface MinaLockOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLockOctagon(props: MinaLockOctagonProps): React.ReactElement;
export default MinaLockOctagon;
