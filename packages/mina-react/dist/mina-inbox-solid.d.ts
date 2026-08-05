import React from 'react';

export interface MinaInboxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInboxSolid(props: MinaInboxSolidProps): React.ReactElement;
export default MinaInboxSolid;
