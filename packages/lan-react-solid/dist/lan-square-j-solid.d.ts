import React from 'react';

export interface LanSquareJSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareJSolid(props: LanSquareJSolidProps): React.ReactElement;
export default LanSquareJSolid;
