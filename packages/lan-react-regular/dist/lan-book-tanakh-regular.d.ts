import React from 'react';

export interface LanBookTanakhRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookTanakhRegular(props: LanBookTanakhRegularProps): React.ReactElement;
export default LanBookTanakhRegular;
