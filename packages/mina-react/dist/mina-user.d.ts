import React from 'react';

export interface MinaUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUser(props: MinaUserProps): React.ReactElement;
export default MinaUser;
