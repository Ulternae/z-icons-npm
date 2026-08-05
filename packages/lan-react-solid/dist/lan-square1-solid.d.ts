import React from 'react';

export interface LanSquare1SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare1Solid(props: LanSquare1SolidProps): React.ReactElement;
export default LanSquare1Solid;
