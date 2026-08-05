import React from 'react';

export interface LanLinkSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkSimple(props: LanLinkSimpleProps): React.ReactElement;
export default LanLinkSimple;
