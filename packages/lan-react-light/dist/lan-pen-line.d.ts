import React from 'react';

export interface LanPenLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenLine(props: LanPenLineProps): React.ReactElement;
export default LanPenLine;
