import React from 'react';

export interface LanFireplaceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireplaceRegular(props: LanFireplaceRegularProps): React.ReactElement;
export default LanFireplaceRegular;
