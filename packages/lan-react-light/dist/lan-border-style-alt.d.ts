import React from 'react';

export interface LanBorderStyleAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderStyleAlt(props: LanBorderStyleAltProps): React.ReactElement;
export default LanBorderStyleAlt;
