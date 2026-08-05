import React from 'react';

export interface NeoAnchorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAnchorSolid(props: NeoAnchorSolidProps): React.ReactElement;
export default NeoAnchorSolid;
