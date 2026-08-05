import React from 'react';

export interface LanLinkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkRegular(props: LanLinkRegularProps): React.ReactElement;
export default LanLinkRegular;
