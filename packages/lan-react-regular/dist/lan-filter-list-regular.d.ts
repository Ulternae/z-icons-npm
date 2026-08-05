import React from 'react';

export interface LanFilterListRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilterListRegular(props: LanFilterListRegularProps): React.ReactElement;
export default LanFilterListRegular;
