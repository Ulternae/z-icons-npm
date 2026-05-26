import React from 'react';

export interface LanContainerStorageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanContainerStorage: React.FC<LanContainerStorageProps>;
export default LanContainerStorage;
