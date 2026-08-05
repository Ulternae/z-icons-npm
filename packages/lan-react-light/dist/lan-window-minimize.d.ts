import React from 'react';

export interface LanWindowMinimizeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowMinimize(props: LanWindowMinimizeProps): React.ReactElement;
export default LanWindowMinimize;
