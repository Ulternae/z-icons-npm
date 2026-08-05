import React from 'react';

export interface LanWindowMaximizeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowMaximize(props: LanWindowMaximizeProps): React.ReactElement;
export default LanWindowMaximize;
