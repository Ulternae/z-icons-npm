import React from 'react';

export interface LanArrowLeftToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowLeftToLine(props: LanArrowLeftToLineProps): React.ReactElement;
export default LanArrowLeftToLine;
