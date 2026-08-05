import React from 'react';

export interface NeoUniversalAccessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoUniversalAccess(props: NeoUniversalAccessProps): React.ReactElement;
export default NeoUniversalAccess;
