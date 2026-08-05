import React from 'react';

export interface LanSquareISolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareISolid(props: LanSquareISolidProps): React.ReactElement;
export default LanSquareISolid;
