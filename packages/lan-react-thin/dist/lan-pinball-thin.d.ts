import React from 'react';

export interface LanPinballThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPinballThin(props: LanPinballThinProps): React.ReactElement;
export default LanPinballThin;
