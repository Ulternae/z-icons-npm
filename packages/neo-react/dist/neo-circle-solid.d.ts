import React from 'react';

export interface NeoCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCircleSolid(props: NeoCircleSolidProps): React.ReactElement;
export default NeoCircleSolid;
