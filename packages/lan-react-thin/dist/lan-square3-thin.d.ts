import React from 'react';

export interface LanSquare3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare3Thin(props: LanSquare3ThinProps): React.ReactElement;
export default LanSquare3Thin;
