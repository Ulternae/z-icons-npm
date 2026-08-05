import React from 'react';

export interface LanSquareEProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareE(props: LanSquareEProps): React.ReactElement;
export default LanSquareE;
