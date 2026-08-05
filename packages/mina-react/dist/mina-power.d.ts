import React from 'react';

export interface MinaPowerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPower(props: MinaPowerProps): React.ReactElement;
export default MinaPower;
