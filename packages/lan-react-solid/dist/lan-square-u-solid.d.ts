import React from 'react';

export interface LanSquareUSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareUSolid(props: LanSquareUSolidProps): React.ReactElement;
export default LanSquareUSolid;
