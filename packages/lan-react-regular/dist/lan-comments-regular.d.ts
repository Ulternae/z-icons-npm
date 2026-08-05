import React from 'react';

export interface LanCommentsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentsRegular(props: LanCommentsRegularProps): React.ReactElement;
export default LanCommentsRegular;
