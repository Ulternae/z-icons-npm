import React from 'react';

export interface LanSquareCSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCSolid(props: LanSquareCSolidProps): React.ReactElement;
export default LanSquareCSolid;
