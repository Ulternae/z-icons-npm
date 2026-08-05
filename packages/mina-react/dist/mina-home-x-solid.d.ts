import React from 'react';

export interface MinaHomeXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHomeXSolid(props: MinaHomeXSolidProps): React.ReactElement;
export default MinaHomeXSolid;
