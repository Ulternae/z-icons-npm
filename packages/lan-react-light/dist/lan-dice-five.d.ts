import React from 'react';

export interface LanDiceFiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceFive(props: LanDiceFiveProps): React.ReactElement;
export default LanDiceFive;
