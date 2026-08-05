import React from 'react';

export interface LanSquare2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare2Thin(props: LanSquare2ThinProps): React.ReactElement;
export default LanSquare2Thin;
