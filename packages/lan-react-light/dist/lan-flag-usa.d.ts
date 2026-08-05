import React from 'react';

export interface LanFlagUsaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlagUsa(props: LanFlagUsaProps): React.ReactElement;
export default LanFlagUsa;
