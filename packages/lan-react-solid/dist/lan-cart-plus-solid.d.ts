import React from 'react';

export interface LanCartPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartPlusSolid(props: LanCartPlusSolidProps): React.ReactElement;
export default LanCartPlusSolid;
