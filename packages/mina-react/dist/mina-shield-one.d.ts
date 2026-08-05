import React from 'react';

export interface MinaShieldOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShieldOne(props: MinaShieldOneProps): React.ReactElement;
export default MinaShieldOne;
