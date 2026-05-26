import React from 'react';

export interface LanContainerStorageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanContainerStorageThin: React.FC<LanContainerStorageThinProps>;
export default LanContainerStorageThin;
