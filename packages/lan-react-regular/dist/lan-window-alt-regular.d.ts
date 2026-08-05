import React from 'react';

export interface LanWindowAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowAltRegular(props: LanWindowAltRegularProps): React.ReactElement;
export default LanWindowAltRegular;
