import React from 'react';

export interface MinaUserMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserMinus(props: MinaUserMinusProps): React.ReactElement;
export default MinaUserMinus;
