import React from 'react';

export interface LanKeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeySolid(props: LanKeySolidProps): React.ReactElement;
export default LanKeySolid;
