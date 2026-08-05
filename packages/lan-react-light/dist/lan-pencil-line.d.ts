import React from 'react';

export interface LanPencilLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPencilLine(props: LanPencilLineProps): React.ReactElement;
export default LanPencilLine;
