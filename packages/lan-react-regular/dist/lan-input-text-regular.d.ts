import React from 'react';

export interface LanInputTextRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInputTextRegular(props: LanInputTextRegularProps): React.ReactElement;
export default LanInputTextRegular;
