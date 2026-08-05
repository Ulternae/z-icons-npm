import React from 'react';

export interface MinaShieldTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShieldTwo(props: MinaShieldTwoProps): React.ReactElement;
export default MinaShieldTwo;
