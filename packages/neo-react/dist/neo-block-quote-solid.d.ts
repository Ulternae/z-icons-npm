import React from 'react';

export interface NeoBlockQuoteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBlockQuoteSolid(props: NeoBlockQuoteSolidProps): React.ReactElement;
export default NeoBlockQuoteSolid;
