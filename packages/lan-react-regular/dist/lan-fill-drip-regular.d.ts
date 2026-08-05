import React from 'react';

export interface LanFillDripRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFillDripRegular(props: LanFillDripRegularProps): React.ReactElement;
export default LanFillDripRegular;
