import React from 'react';

export interface LanTrophySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrophySolid(props: LanTrophySolidProps): React.ReactElement;
export default LanTrophySolid;
