import React from 'react';

export interface MinaGridOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGridOneSolid(props: MinaGridOneSolidProps): React.ReactElement;
export default MinaGridOneSolid;
