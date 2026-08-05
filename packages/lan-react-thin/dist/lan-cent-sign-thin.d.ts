import React from 'react';

export interface LanCentSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCentSignThin(props: LanCentSignThinProps): React.ReactElement;
export default LanCentSignThin;
