import React from 'react';

export interface MinaShieldCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShieldCheck(props: MinaShieldCheckProps): React.ReactElement;
export default MinaShieldCheck;
