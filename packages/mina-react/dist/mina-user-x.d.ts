import React from 'react';

export interface MinaUserXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserX(props: MinaUserXProps): React.ReactElement;
export default MinaUserX;
