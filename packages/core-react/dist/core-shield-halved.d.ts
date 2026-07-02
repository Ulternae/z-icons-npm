import React from 'react';

export interface CoreShieldHalvedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShieldHalved(props: CoreShieldHalvedProps): React.ReactElement;
export default CoreShieldHalved;
