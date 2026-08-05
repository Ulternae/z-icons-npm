import React from 'react';

export interface LanCaretSquareUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaretSquareUpSolid(props: LanCaretSquareUpSolidProps): React.ReactElement;
export default LanCaretSquareUpSolid;
