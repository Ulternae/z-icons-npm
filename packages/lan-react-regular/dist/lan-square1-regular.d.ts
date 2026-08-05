import React from 'react';

export interface LanSquare1RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare1Regular(props: LanSquare1RegularProps): React.ReactElement;
export default LanSquare1Regular;
