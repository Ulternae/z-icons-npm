import React from 'react';

export interface LanPageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPageRegular(props: LanPageRegularProps): React.ReactElement;
export default LanPageRegular;
