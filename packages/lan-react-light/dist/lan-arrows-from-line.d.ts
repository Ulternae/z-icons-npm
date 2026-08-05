import React from 'react';

export interface LanArrowsFromLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsFromLine(props: LanArrowsFromLineProps): React.ReactElement;
export default LanArrowsFromLine;
