import React from 'react';

export interface MinaHomeCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHomeCheckSolid(props: MinaHomeCheckSolidProps): React.ReactElement;
export default MinaHomeCheckSolid;
