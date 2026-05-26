import React from 'react';

export interface LanContainerStorageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanContainerStorageSolid: React.FC<LanContainerStorageSolidProps>;
export default LanContainerStorageSolid;
