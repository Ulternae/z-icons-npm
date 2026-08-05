import React from 'react';

export interface LanSquareUProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareU(props: LanSquareUProps): React.ReactElement;
export default LanSquareU;
