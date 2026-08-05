import React from 'react';

export interface LanBlackboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlackboardRegular(props: LanBlackboardRegularProps): React.ReactElement;
export default LanBlackboardRegular;
