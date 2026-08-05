import React from 'react';

export interface LanContainerStorageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanContainerStorageThin(props: LanContainerStorageThinProps): React.ReactElement;
export default LanContainerStorageThin;
