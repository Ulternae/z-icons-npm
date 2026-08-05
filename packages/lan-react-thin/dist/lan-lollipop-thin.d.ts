import React from 'react';

export interface LanLollipopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLollipopThin(props: LanLollipopThinProps): React.ReactElement;
export default LanLollipopThin;
