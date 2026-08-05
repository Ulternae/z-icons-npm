import React from 'react';

export interface MinaShieldOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShieldOneSolid(props: MinaShieldOneSolidProps): React.ReactElement;
export default MinaShieldOneSolid;
