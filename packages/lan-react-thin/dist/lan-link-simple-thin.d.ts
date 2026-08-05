import React from 'react';

export interface LanLinkSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkSimpleThin(props: LanLinkSimpleThinProps): React.ReactElement;
export default LanLinkSimpleThin;
