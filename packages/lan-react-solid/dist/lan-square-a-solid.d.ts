import React from 'react';

export interface LanSquareASolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareASolid(props: LanSquareASolidProps): React.ReactElement;
export default LanSquareASolid;
