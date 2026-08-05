import React from 'react';

export interface LanShelvesEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShelvesEmptySolid(props: LanShelvesEmptySolidProps): React.ReactElement;
export default LanShelvesEmptySolid;
