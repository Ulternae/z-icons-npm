import React from 'react';

export interface MinaLogoutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLogout(props: MinaLogoutProps): React.ReactElement;
export default MinaLogout;
