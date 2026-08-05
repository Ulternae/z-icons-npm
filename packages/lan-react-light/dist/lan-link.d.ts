import React from 'react';

export interface LanLinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLink(props: LanLinkProps): React.ReactElement;
export default LanLink;
