import React from 'react';

export interface NeoLockOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLockOpen: React.FC<NeoLockOpenProps>;
export default NeoLockOpen;
