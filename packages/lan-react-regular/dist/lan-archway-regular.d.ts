import React from 'react';

export interface LanArchwayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArchwayRegular(props: LanArchwayRegularProps): React.ReactElement;
export default LanArchwayRegular;
