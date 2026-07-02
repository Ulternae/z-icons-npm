import React from 'react';

export interface CoreShieldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShield(props: CoreShieldProps): React.ReactElement;
export default CoreShield;
