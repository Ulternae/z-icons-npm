import React from 'react';

export interface LanSquareQProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareQ(props: LanSquareQProps): React.ReactElement;
export default LanSquareQ;
