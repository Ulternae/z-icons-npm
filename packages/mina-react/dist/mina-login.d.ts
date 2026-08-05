import React from 'react';

export interface MinaLoginProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLogin(props: MinaLoginProps): React.ReactElement;
export default MinaLogin;
