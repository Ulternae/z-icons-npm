import React from 'react';

export interface LanGrid4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid4Regular(props: LanGrid4RegularProps): React.ReactElement;
export default LanGrid4Regular;
