import React from 'react';

export interface MinaUmbrellaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUmbrellaSolid(props: MinaUmbrellaSolidProps): React.ReactElement;
export default MinaUmbrellaSolid;
