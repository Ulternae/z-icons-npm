import React from 'react';

export interface LanFRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFRegular(props: LanFRegularProps): React.ReactElement;
export default LanFRegular;
