import React from 'react';

export interface LanGrid2RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid2Regular(props: LanGrid2RegularProps): React.ReactElement;
export default LanGrid2Regular;
