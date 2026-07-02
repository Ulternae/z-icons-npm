import React from 'react';

export interface CoreShieldCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShieldCheck(props: CoreShieldCheckProps): React.ReactElement;
export default CoreShieldCheck;
