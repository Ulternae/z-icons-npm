import React from 'react';

export interface LanSquare5ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare5Thin(props: LanSquare5ThinProps): React.ReactElement;
export default LanSquare5Thin;
