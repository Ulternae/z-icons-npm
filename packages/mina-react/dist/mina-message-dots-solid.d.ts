import React from 'react';

export interface MinaMessageDotsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMessageDotsSolid(props: MinaMessageDotsSolidProps): React.ReactElement;
export default MinaMessageDotsSolid;
