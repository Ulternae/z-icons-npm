import React from 'react';

export interface MinaFlameKindlingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFlameKindlingSolid(props: MinaFlameKindlingSolidProps): React.ReactElement;
export default MinaFlameKindlingSolid;
