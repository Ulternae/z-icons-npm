import React from 'react';

export interface LanUpLeftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpLeftRegular(props: LanUpLeftRegularProps): React.ReactElement;
export default LanUpLeftRegular;
