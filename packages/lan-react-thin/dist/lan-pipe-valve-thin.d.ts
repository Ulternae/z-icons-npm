import React from 'react';

export interface LanPipeValveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeValveThin(props: LanPipeValveThinProps): React.ReactElement;
export default LanPipeValveThin;
