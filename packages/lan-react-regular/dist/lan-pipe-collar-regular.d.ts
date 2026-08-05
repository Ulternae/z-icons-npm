import React from 'react';

export interface LanPipeCollarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeCollarRegular(props: LanPipeCollarRegularProps): React.ReactElement;
export default LanPipeCollarRegular;
