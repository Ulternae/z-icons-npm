import React from 'react';

export interface LanCodeForkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeFork(props: LanCodeForkProps): React.ReactElement;
export default LanCodeFork;
