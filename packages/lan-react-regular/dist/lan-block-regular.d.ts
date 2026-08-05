import React from 'react';

export interface LanBlockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlockRegular(props: LanBlockRegularProps): React.ReactElement;
export default LanBlockRegular;
