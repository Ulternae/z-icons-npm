import React from 'react';

export interface LanPlayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlayRegular(props: LanPlayRegularProps): React.ReactElement;
export default LanPlayRegular;
