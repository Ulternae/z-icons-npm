import React from 'react';

export interface LanTtySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTtySolid(props: LanTtySolidProps): React.ReactElement;
export default LanTtySolid;
