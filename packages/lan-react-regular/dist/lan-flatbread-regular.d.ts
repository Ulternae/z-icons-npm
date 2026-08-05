import React from 'react';

export interface LanFlatbreadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlatbreadRegular(props: LanFlatbreadRegularProps): React.ReactElement;
export default LanFlatbreadRegular;
