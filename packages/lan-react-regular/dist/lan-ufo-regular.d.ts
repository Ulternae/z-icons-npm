import React from 'react';

export interface LanUfoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUfoRegular(props: LanUfoRegularProps): React.ReactElement;
export default LanUfoRegular;
