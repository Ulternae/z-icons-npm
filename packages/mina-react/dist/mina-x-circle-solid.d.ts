import React from 'react';

export interface MinaXCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaXCircleSolid(props: MinaXCircleSolidProps): React.ReactElement;
export default MinaXCircleSolid;
