import React from 'react';

export interface LanPipeCollarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeCollar(props: LanPipeCollarProps): React.ReactElement;
export default LanPipeCollar;
