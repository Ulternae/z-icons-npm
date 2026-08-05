import React from 'react';

export interface LanMaceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaceRegular(props: LanMaceRegularProps): React.ReactElement;
export default LanMaceRegular;
