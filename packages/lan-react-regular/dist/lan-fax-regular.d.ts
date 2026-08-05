import React from 'react';

export interface LanFaxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaxRegular(props: LanFaxRegularProps): React.ReactElement;
export default LanFaxRegular;
