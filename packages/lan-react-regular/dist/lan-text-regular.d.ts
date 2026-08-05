import React from 'react';

export interface LanTextRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextRegular(props: LanTextRegularProps): React.ReactElement;
export default LanTextRegular;
