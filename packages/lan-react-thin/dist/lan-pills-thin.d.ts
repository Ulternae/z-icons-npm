import React from 'react';

export interface LanPillsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPillsThin(props: LanPillsThinProps): React.ReactElement;
export default LanPillsThin;
