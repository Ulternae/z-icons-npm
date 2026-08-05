import React from 'react';

export interface LanPersonHikingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonHiking(props: LanPersonHikingProps): React.ReactElement;
export default LanPersonHiking;
