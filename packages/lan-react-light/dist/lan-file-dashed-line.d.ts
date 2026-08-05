import React from 'react';

export interface LanFileDashedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileDashedLine(props: LanFileDashedLineProps): React.ReactElement;
export default LanFileDashedLine;
