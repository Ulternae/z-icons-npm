import React from 'react';

export interface CoreMobileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMobile(props: CoreMobileProps): React.ReactElement;
export default CoreMobile;
