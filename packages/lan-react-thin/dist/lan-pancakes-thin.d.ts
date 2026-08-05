import React from 'react';

export interface LanPancakesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPancakesThin(props: LanPancakesThinProps): React.ReactElement;
export default LanPancakesThin;
