import React from 'react';

export interface NeoCarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCarSolid(props: NeoCarSolidProps): React.ReactElement;
export default NeoCarSolid;
