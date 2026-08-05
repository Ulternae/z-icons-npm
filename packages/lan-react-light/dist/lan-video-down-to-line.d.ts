import React from 'react';

export interface LanVideoDownToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoDownToLine(props: LanVideoDownToLineProps): React.ReactElement;
export default LanVideoDownToLine;
