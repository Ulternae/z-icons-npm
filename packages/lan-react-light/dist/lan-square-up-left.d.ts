import React from 'react';

export interface LanSquareUpLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareUpLeft(props: LanSquareUpLeftProps): React.ReactElement;
export default LanSquareUpLeft;
