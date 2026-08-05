import React from 'react';

export interface LanGrid3RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid3Regular(props: LanGrid3RegularProps): React.ReactElement;
export default LanGrid3Regular;
