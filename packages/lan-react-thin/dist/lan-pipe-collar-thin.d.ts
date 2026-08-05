import React from 'react';

export interface LanPipeCollarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeCollarThin(props: LanPipeCollarThinProps): React.ReactElement;
export default LanPipeCollarThin;
