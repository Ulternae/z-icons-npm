import React from 'react';

export interface LanFileWordProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileWord(props: LanFileWordProps): React.ReactElement;
export default LanFileWord;
