import React from 'react';

export interface LanAnchorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAnchorRegular(props: LanAnchorRegularProps): React.ReactElement;
export default LanAnchorRegular;
