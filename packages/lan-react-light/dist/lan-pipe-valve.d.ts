import React from 'react';

export interface LanPipeValveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeValve(props: LanPipeValveProps): React.ReactElement;
export default LanPipeValve;
