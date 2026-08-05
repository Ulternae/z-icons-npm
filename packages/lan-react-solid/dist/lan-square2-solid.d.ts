import React from 'react';

export interface LanSquare2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare2Solid(props: LanSquare2SolidProps): React.ReactElement;
export default LanSquare2Solid;
