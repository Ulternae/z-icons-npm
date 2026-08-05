import React from 'react';

export interface NeoForwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoForwardSolid(props: NeoForwardSolidProps): React.ReactElement;
export default NeoForwardSolid;
