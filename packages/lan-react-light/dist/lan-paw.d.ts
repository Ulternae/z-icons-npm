import React from 'react';

export interface LanPawProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaw(props: LanPawProps): React.ReactElement;
export default LanPaw;
