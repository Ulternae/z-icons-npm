import React from 'react';

export interface LanContainerStorageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanContainerStorage(props: LanContainerStorageProps): React.ReactElement;
export default LanContainerStorage;
