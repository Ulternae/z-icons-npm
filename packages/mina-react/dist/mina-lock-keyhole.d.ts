import React from 'react';

export interface MinaLockKeyholeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLockKeyhole(props: MinaLockKeyholeProps): React.ReactElement;
export default MinaLockKeyhole;
