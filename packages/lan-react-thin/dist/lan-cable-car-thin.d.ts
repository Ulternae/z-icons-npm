import React from 'react';

export interface LanCableCarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCableCarThin(props: LanCableCarThinProps): React.ReactElement;
export default LanCableCarThin;
