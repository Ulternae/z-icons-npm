import React from 'react';

export interface LanIdBadgeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIdBadgeSolid(props: LanIdBadgeSolidProps): React.ReactElement;
export default LanIdBadgeSolid;
