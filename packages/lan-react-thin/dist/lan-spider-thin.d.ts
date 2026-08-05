import React from 'react';

export interface LanSpiderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpiderThin(props: LanSpiderThinProps): React.ReactElement;
export default LanSpiderThin;
