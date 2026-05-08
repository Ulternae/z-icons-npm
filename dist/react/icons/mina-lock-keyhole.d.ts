import React from 'react';

export interface MinaLockKeyholeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockKeyhole: React.FC<MinaLockKeyholeProps>;
export default MinaLockKeyhole;
