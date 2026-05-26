import React from 'react';

export interface LanContainerStorageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanContainerStorageRegular: React.FC<LanContainerStorageRegularProps>;
export default LanContainerStorageRegular;
