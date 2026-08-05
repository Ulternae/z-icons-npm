import React from 'react';

export interface LanForkliftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanForkliftRegular(props: LanForkliftRegularProps): React.ReactElement;
export default LanForkliftRegular;
