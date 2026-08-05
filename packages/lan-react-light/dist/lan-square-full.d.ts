import React from 'react';

export interface LanSquareFullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareFull(props: LanSquareFullProps): React.ReactElement;
export default LanSquareFull;
