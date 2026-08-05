import React from 'react';

export interface LanLineColumnsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLineColumnsRegular(props: LanLineColumnsRegularProps): React.ReactElement;
export default LanLineColumnsRegular;
