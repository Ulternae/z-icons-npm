import React from 'react';

export interface LanBadgeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadgeSolid(props: LanBadgeSolidProps): React.ReactElement;
export default LanBadgeSolid;
