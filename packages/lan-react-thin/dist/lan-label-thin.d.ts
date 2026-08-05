import React from 'react';

export interface LanLabelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLabelThin(props: LanLabelThinProps): React.ReactElement;
export default LanLabelThin;
