import React from 'react';

export interface LanUserShakespeareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserShakespeare(props: LanUserShakespeareProps): React.ReactElement;
export default LanUserShakespeare;
