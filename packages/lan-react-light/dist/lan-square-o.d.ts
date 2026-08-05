import React from 'react';

export interface LanSquareOProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareO(props: LanSquareOProps): React.ReactElement;
export default LanSquareO;
