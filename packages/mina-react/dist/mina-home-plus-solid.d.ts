import React from 'react';

export interface MinaHomePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHomePlusSolid(props: MinaHomePlusSolidProps): React.ReactElement;
export default MinaHomePlusSolid;
