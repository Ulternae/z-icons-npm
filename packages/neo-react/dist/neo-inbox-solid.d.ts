import React from 'react';

export interface NeoInboxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoInboxSolid(props: NeoInboxSolidProps): React.ReactElement;
export default NeoInboxSolid;
