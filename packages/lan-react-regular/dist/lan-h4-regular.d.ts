import React from 'react';

export interface LanH4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH4Regular(props: LanH4RegularProps): React.ReactElement;
export default LanH4Regular;
