import React from 'react';

export interface LanBookAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookAltRegular(props: LanBookAltRegularProps): React.ReactElement;
export default LanBookAltRegular;
