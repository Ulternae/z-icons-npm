import React from 'react';

export interface LanBrailleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBraille(props: LanBrailleProps): React.ReactElement;
export default LanBraille;
