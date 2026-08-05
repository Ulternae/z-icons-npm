import React from 'react';

export interface LanContainerStorageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanContainerStorageSolid(props: LanContainerStorageSolidProps): React.ReactElement;
export default LanContainerStorageSolid;
