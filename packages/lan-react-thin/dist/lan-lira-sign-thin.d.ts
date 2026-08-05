import React from 'react';

export interface LanLiraSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLiraSignThin(props: LanLiraSignThinProps): React.ReactElement;
export default LanLiraSignThin;
