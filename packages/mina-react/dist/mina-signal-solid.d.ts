import React from 'react';

export interface MinaSignalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSignalSolid(props: MinaSignalSolidProps): React.ReactElement;
export default MinaSignalSolid;
