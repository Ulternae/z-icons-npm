import React from 'react';

export interface LanArrowsMinimizeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsMinimize(props: LanArrowsMinimizeProps): React.ReactElement;
export default LanArrowsMinimize;
