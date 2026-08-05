import React from 'react';

export interface LanBriefsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBriefs(props: LanBriefsProps): React.ReactElement;
export default LanBriefs;
