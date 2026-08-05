import React from 'react';

export interface LanMessageDotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageDotThin(props: LanMessageDotThinProps): React.ReactElement;
export default LanMessageDotThin;
