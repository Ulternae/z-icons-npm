import React from 'react';

export interface LanTugrikSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTugrikSignThin(props: LanTugrikSignThinProps): React.ReactElement;
export default LanTugrikSignThin;
