import React from 'react';

export interface LanSpiderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpiderRegular(props: LanSpiderRegularProps): React.ReactElement;
export default LanSpiderRegular;
