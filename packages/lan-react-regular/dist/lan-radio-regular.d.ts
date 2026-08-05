import React from 'react';

export interface LanRadioRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRadioRegular(props: LanRadioRegularProps): React.ReactElement;
export default LanRadioRegular;
