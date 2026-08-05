import React from 'react';

export interface LanSquare2RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare2Regular(props: LanSquare2RegularProps): React.ReactElement;
export default LanSquare2Regular;
