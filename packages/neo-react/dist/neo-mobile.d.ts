import React from 'react';

export interface NeoMobileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMobile(props: NeoMobileProps): React.ReactElement;
export default NeoMobile;
