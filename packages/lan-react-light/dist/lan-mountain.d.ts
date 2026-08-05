import React from 'react';

export interface LanMountainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMountain(props: LanMountainProps): React.ReactElement;
export default LanMountain;
