import React from 'react';

export interface LanCarKeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarKeySolid(props: LanCarKeySolidProps): React.ReactElement;
export default LanCarKeySolid;
