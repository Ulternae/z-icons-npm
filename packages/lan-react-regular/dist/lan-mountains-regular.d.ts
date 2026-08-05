import React from 'react';

export interface LanMountainsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMountainsRegular(props: LanMountainsRegularProps): React.ReactElement;
export default LanMountainsRegular;
