import React from 'react';

export interface LanFlagUsaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlagUsaThin(props: LanFlagUsaThinProps): React.ReactElement;
export default LanFlagUsaThin;
