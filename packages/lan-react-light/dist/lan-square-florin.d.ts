import React from 'react';

export interface LanSquareFlorinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareFlorin(props: LanSquareFlorinProps): React.ReactElement;
export default LanSquareFlorin;
