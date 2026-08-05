import React from 'react';

export interface LanSquareWSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareWSolid(props: LanSquareWSolidProps): React.ReactElement;
export default LanSquareWSolid;
