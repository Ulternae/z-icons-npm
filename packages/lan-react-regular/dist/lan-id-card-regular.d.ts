import React from 'react';

export interface LanIdCardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIdCardRegular(props: LanIdCardRegularProps): React.ReactElement;
export default LanIdCardRegular;
