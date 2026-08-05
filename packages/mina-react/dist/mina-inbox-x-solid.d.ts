import React from 'react';

export interface MinaInboxXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInboxXSolid(props: MinaInboxXSolidProps): React.ReactElement;
export default MinaInboxXSolid;
