import React from 'react';

export interface LanMountainsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMountains(props: LanMountainsProps): React.ReactElement;
export default LanMountains;
