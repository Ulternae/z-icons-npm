import React from 'react';

export interface LanLinkHorizontalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkHorizontalRegular(props: LanLinkHorizontalRegularProps): React.ReactElement;
export default LanLinkHorizontalRegular;
