import React from 'react';

export interface LanSquare1ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare1Thin(props: LanSquare1ThinProps): React.ReactElement;
export default LanSquare1Thin;
