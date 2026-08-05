import React from 'react';

export interface LanPinballProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPinball(props: LanPinballProps): React.ReactElement;
export default LanPinball;
