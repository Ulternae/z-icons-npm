import React from 'react';

export interface MinaUserCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserCheck(props: MinaUserCheckProps): React.ReactElement;
export default MinaUserCheck;
