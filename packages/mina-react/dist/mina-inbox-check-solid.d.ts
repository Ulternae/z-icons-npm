import React from 'react';

export interface MinaInboxCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInboxCheckSolid(props: MinaInboxCheckSolidProps): React.ReactElement;
export default MinaInboxCheckSolid;
