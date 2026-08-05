import React from 'react';

export interface LanPipeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeThin(props: LanPipeThinProps): React.ReactElement;
export default LanPipeThin;
