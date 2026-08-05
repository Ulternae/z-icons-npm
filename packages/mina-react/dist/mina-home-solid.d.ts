import React from 'react';

export interface MinaHomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHomeSolid(props: MinaHomeSolidProps): React.ReactElement;
export default MinaHomeSolid;
