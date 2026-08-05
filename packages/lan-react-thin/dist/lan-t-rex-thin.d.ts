import React from 'react';

export interface LanTRexThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTRexThin(props: LanTRexThinProps): React.ReactElement;
export default LanTRexThin;
