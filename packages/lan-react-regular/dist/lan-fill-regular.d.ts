import React from 'react';

export interface LanFillRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFillRegular(props: LanFillRegularProps): React.ReactElement;
export default LanFillRegular;
