import React from 'react';

export interface LanArrowSquareUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowSquareUp(props: LanArrowSquareUpProps): React.ReactElement;
export default LanArrowSquareUp;
