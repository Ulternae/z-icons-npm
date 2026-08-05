import React from 'react';

export interface NeoCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCirclePlusSolid(props: NeoCirclePlusSolidProps): React.ReactElement;
export default NeoCirclePlusSolid;
