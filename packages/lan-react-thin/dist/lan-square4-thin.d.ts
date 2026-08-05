import React from 'react';

export interface LanSquare4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare4Thin(props: LanSquare4ThinProps): React.ReactElement;
export default LanSquare4Thin;
