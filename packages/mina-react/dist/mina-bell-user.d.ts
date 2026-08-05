import React from 'react';

export interface MinaBellUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellUser(props: MinaBellUserProps): React.ReactElement;
export default MinaBellUser;
