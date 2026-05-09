import React from 'react';

export interface MinaLogoutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLogout: React.FC<MinaLogoutProps>;
export default MinaLogout;
