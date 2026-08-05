import React from 'react';

export interface MinaUserOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserOctagon(props: MinaUserOctagonProps): React.ReactElement;
export default MinaUserOctagon;
