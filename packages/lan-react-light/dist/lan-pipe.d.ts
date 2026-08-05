import React from 'react';

export interface LanPipeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipe(props: LanPipeProps): React.ReactElement;
export default LanPipe;
