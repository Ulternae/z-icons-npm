import React from 'react';

export interface LanTapeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTapeSolid(props: LanTapeSolidProps): React.ReactElement;
export default LanTapeSolid;
