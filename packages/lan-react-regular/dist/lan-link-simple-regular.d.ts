import React from 'react';

export interface LanLinkSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkSimpleRegular(props: LanLinkSimpleRegularProps): React.ReactElement;
export default LanLinkSimpleRegular;
