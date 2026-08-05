import React from 'react';

export interface LanLeoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeo(props: LanLeoProps): React.ReactElement;
export default LanLeo;
