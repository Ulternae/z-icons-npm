import React from 'react';

export interface MinaShieldMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShieldMinus(props: MinaShieldMinusProps): React.ReactElement;
export default MinaShieldMinus;
