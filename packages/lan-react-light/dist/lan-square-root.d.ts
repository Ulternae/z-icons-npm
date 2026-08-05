import React from 'react';

export interface LanSquareRootProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareRoot(props: LanSquareRootProps): React.ReactElement;
export default LanSquareRoot;
