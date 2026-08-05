import React from 'react';

export interface LanSquareColonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareColon(props: LanSquareColonProps): React.ReactElement;
export default LanSquareColon;
