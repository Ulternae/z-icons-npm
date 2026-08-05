import React from 'react';

export interface LanImageBrokenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageBrokenRegular(props: LanImageBrokenRegularProps): React.ReactElement;
export default LanImageBrokenRegular;
