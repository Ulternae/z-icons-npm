import React from 'react';

export interface LanContainerStorageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanContainerStorageRegular(props: LanContainerStorageRegularProps): React.ReactElement;
export default LanContainerStorageRegular;
