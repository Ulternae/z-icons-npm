import React from 'react';

export interface MinaShieldPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShieldPlusSolid(props: MinaShieldPlusSolidProps): React.ReactElement;
export default MinaShieldPlusSolid;
