import React from 'react';

export interface LanSquare8ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare8Thin(props: LanSquare8ThinProps): React.ReactElement;
export default LanSquare8Thin;
