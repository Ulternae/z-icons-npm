import React from 'react';

export interface LanFortRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFortRegular(props: LanFortRegularProps): React.ReactElement;
export default LanFortRegular;
