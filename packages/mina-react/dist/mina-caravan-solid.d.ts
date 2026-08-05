import React from 'react';

export interface MinaCaravanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCaravanSolid(props: MinaCaravanSolidProps): React.ReactElement;
export default MinaCaravanSolid;
