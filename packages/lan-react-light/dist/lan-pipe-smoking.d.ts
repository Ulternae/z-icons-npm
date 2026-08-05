import React from 'react';

export interface LanPipeSmokingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeSmoking(props: LanPipeSmokingProps): React.ReactElement;
export default LanPipeSmoking;
