import React from 'react';

export interface MinaShieldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShieldSolid(props: MinaShieldSolidProps): React.ReactElement;
export default MinaShieldSolid;
