import React from 'react';

export interface MinaShieldXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShieldXSolid(props: MinaShieldXSolidProps): React.ReactElement;
export default MinaShieldXSolid;
