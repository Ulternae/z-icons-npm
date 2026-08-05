import React from 'react';

export interface NeoShareNodesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoShareNodesSolid(props: NeoShareNodesSolidProps): React.ReactElement;
export default NeoShareNodesSolid;
