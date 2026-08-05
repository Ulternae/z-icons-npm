import React from 'react';

export interface MinaNavigationOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNavigationOneSolid(props: MinaNavigationOneSolidProps): React.ReactElement;
export default MinaNavigationOneSolid;
