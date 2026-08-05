import React from 'react';

export interface NeoBarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBarsSolid(props: NeoBarsSolidProps): React.ReactElement;
export default NeoBarsSolid;
