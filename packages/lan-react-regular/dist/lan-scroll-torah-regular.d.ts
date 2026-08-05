import React from 'react';

export interface LanScrollTorahRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrollTorahRegular(props: LanScrollTorahRegularProps): React.ReactElement;
export default LanScrollTorahRegular;
