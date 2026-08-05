import React from 'react';

export interface MinaUserPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserPlus(props: MinaUserPlusProps): React.ReactElement;
export default MinaUserPlus;
