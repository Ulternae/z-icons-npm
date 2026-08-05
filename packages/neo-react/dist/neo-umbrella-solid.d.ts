import React from 'react';

export interface NeoUmbrellaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoUmbrellaSolid(props: NeoUmbrellaSolidProps): React.ReactElement;
export default NeoUmbrellaSolid;
