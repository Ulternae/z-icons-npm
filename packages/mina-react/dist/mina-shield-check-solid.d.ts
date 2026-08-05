import React from 'react';

export interface MinaShieldCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShieldCheckSolid(props: MinaShieldCheckSolidProps): React.ReactElement;
export default MinaShieldCheckSolid;
