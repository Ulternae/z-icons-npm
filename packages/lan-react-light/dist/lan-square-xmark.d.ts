import React from 'react';

export interface LanSquareXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareXmark(props: LanSquareXmarkProps): React.ReactElement;
export default LanSquareXmark;
