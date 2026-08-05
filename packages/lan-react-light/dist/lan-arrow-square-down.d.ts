import React from 'react';

export interface LanArrowSquareDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowSquareDown(props: LanArrowSquareDownProps): React.ReactElement;
export default LanArrowSquareDown;
