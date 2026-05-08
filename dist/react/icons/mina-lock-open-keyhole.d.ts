import React from 'react';

export interface MinaLockOpenKeyholeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockOpenKeyhole: React.FC<MinaLockOpenKeyholeProps>;
export default MinaLockOpenKeyhole;
