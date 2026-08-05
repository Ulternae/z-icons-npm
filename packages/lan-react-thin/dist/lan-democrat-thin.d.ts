import React from 'react';

export interface LanDemocratThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDemocratThin(props: LanDemocratThinProps): React.ReactElement;
export default LanDemocratThin;
