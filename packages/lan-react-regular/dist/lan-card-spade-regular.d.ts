import React from 'react';

export interface LanCardSpadeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardSpadeRegular(props: LanCardSpadeRegularProps): React.ReactElement;
export default LanCardSpadeRegular;
