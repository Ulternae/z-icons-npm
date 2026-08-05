import React from 'react';

export interface MinaTreesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTreesSolid(props: MinaTreesSolidProps): React.ReactElement;
export default MinaTreesSolid;
