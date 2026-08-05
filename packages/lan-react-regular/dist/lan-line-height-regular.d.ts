import React from 'react';

export interface LanLineHeightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLineHeightRegular(props: LanLineHeightRegularProps): React.ReactElement;
export default LanLineHeightRegular;
